import {
    Authenticate, Creative, Artifact, GetCreativesInAlbums, UserData, CreateArtifactLike, DeleteArtifactLike,
    DeleteCreative, HardDeleteCreative, QueryCreatives, QueryArtifacts, AlbumRef, GetAlbumRefs, GetUserInfo,
} from "./dtos.mjs"
import { ApiResult, combinePaths, leftPart, rightPart } from "@servicestack/client"
import { useAuth, useUtils } from "@servicestack/vue"

export const BaseUrl = globalThis.BaseUrl = location.origin === 'https://localhost:5002' || location.origin === 'http://localhost:8080'
    ? 'https://localhost:5001'
    : 'https://api.blazordiffusion.com/'
export const AssetsBasePath = globalThis.AssetsBasePath = "https://cdn.diffusion.works"
export const FallbackAssetsBasePath = globalThis.FallbackAssetsBasePath = "https://pub-97bba6b94a944260b10a6e7d4bf98053.r2.dev"

export class Store {
    BaseUrl = BaseUrl
    AssetsBasePath = AssetsBasePath
    FallbackAssetsBasePath = FallbackAssetsBasePath
    DefaultProfileUrl = 'data:image/svg+xml,%3Csvg style=\'color:rgb(8 145 178);border-radius: 9999px;overflow: hidden;\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cpath fill=\'currentColor\' d=\'M200,100 a100,100 0 1 0 -167.3,73.9 a3.6,3.6 0 0 0 0.9,0.8 a99.9,99.9 0 0 0 132.9,0 l0.8,-0.8 A99.6,99.6 0 0 0 200,100 zm-192,0 a92,92 0 1 1 157.2,64.9 a75.8,75.8 0 0 0 -44.5,-34.1 a44,44 0 1 0 -41.4,0 a75.8,75.8 0 0 0 -44.5,34.1 A92.1,92.1 0 0 1 8,100 zm92,28 a36,36 0 1 1 36,-36 a36,36 0 0 1 -36,36 zm-59.1,42.4 a68,68 0 0 1 118.2,0 a91.7,91.7 0 0 1 -118.2,0 z\' /%3E%3C/svg%3E%0A'
    /** @type {Record<number,Creative>} */
    creativesMap = {}
    /** @type {Record<number,Artifact>} */
    artifactsMap = {}
    /** @type {Record<number,AlbumResult[]>} */
    creativesInAlbumsMap = {}
    /** @type {AlbumRef[]} */
    albumRefs = []
    /** @type {Record<number,AlbumRef>} */
    albumRefsMap = {}
    /** @type {Record<number,UserResult>} */
    userRefsMap = {}
    /** @type {JsonServiceClient} */
    client = null
    /** @type {AuthenticateResponse} */
    auth = null
    authKey = null
    userDataKey = null
    albumRefsKey = null

    css = new AppCss()
    data = new AppData()
    prefs = new AppPrefs()

    constructor(client) {
        this.client = client

        const { swrCacheKey } = useUtils()
        this.authKey = swrCacheKey(new Authenticate())
        this.userDataKey = swrCacheKey(new UserData())
        this.albumRefsKey = swrCacheKey(new GetAlbumRefs())
    }
    
    /** @type {UserDataResponse|null} */
    userData = null
    
    signIn(auth) {
        const { signIn } = useAuth()
        this.auth = auth
        signIn(auth)
        auth._date = new Date().valueOf()
        localStorage.setItem(this.authKey, JSON.stringify(auth))
    }
    signOut() {
        const { signOut } = useAuth()
        this.auth = null
        signOut()
        localStorage.removeItem(this.authKey)
    }
    async load() {
        await Promise.all([
            this.loadAuth(),
            this.loadUserData(),
            this.loadAlbumRefs(),
        ])
    }
    async loadAuth() {
        const cacheKey = this.authKey
        const json = localStorage.getItem(cacheKey)
        if (json) {
            this.signIn(JSON.parse(json))
        }
    }
    async loadUserData() {
        const cacheKey = this.userDataKey
        const json = localStorage.getItem(cacheKey)
        if (json) {
            this.userData = JSON.parse(json)
        }
        const api = await this.client.api(new UserData())
        if (api.succeeded) {
            this.userData = api.response
            localStorage.setItem(cacheKey, JSON.stringify(this.userData))
        } else {
            this.userData = null
            localStorage.removeItem(cacheKey)
        }
    }
    async loadAlbumRefs() {
        const cacheKey = this.albumRefsKey
        const json = localStorage.getItem(cacheKey)
        if (json) {
            this.albumRefs = JSON.parse(json)
            this.albumRefs.forEach(x => this.albumRefsMap[x.refId] = x)
        }
        const api = await this.client.api(new GetAlbumRefs())
        if (api.succeeded) {
            this.albumRefs = api.response.results || []
            this.albumRefs.forEach(x => this.albumRefsMap[x.refId] = x)
            localStorage.setItem(cacheKey, JSON.stringify(this.albumRefs))
        }
    }
    
    /** @param {string} userRef */
    async loadUserByRef(userRef) {
        if (this.userRefsMap[userRef])
            return this.userRefsMap[userRef]
        const api = await this.client.api(new GetUserInfo({ refId:userRef }))
        if (api.succeeded) {
            const result = api.response.result
            if (result)
                this.userRefsMap[result.refId] = result
            return result
        }
    }
    
    signOut() {
        this.userData = null
    }

    /** @param {number[]} ids */
    async loadArtifactsByIds(ids) {
        const missingIds = []
        ids.forEach(id => {
            if (!this.artifactsMap[id]) missingIds.push(id)
        })
        if (missingIds.length > 0) {
            const api = await this.client.api(new QueryArtifacts({ ids:missingIds }))
            if (api.succeeded) {
                this.loadArtifacts(api.response.results)
            }
        }
    }
    
    /** @param {Artifact[]} artifacts */
    loadArtifacts(artifacts) { artifacts?.forEach(x => this.loadArtifact(x)) }
    /** @param {Artifact} artifact */
    loadArtifact(artifact) { return artifact && (this.artifactsMap[artifact.id] = artifact) }

    /** @param {Creative[]} creatives */
    loadCreatives(creatives) { creatives?.forEach(x => this.loadCreative(x)) }
    /** @param {Creative} creative */
    loadCreative(creative) {
        if (creative) {
            this.creativesMap[creative.id] = creative
            this.loadArtifacts(creative.artifacts)
        }
        return creative
    }
    
    /** @param {number} id */
    async getCreative(id) {
        if (this.creativesMap[id])
            return this.creativesMap[id]
        const api = await this.client.api(new QueryCreatives({ id }))
        if (api.succeeded) {
            return this.loadCreative(api.response.results[0])
        }
        return null
    }

    /** @param {number} id */
    async getArtifact(id) {
        if (this.artifactsMap[id])
            return this.artifactsMap[id]
        const api = await this.client.api(new QueryArtifacts({ id }))
        if (api.succeeded) {
            return this.loadArtifact(api.response.results[0])
        }
        return null
    }

    /** @param {Artifact} artifact */
    removeArtifact(artifact) {
        if (artifact) return
        const pos = this.userData.user.likes.artifactIds.indexOf(artifact.id)
        if (pos >= 0) this.userData.user.likes.artifactIds.splice(pos,1) 
        delete this.artifactsMap[artifact.id]
    }

    /** @param {Creative} creative */
    removeCreative(creative) {
        if (!creative) return
        creative.artifacts.forEach(this.removeArtifact)
        delete this.creativesMap[creative.id]
    }

    /** @param {Creative} creative */
    async softDelete(creative) {
        const api = await this.client.apiVoid(new DeleteCreative({ id:creative.id }))
        if (api.succeeded) {
            this.removeCreative(creative)
        }
        return api
    }

    /** @param {Creative} creative */
    async hardDelete(creative) {
        const api = await this.client.apiVoid(new HardDeleteCreative({ id:creative.id }))
        if (api.succeeded) {
            this.removeCreative(creative)
        }
        return api
    }

    /** @param {number} creativeId */
    async getCreativeInAlbums(creativeId) {
        if (!creativeId)
            return []
        if (this.creativesInAlbumsMap[creativeId])
            return this.creativesInAlbumsMap[creativeId]
        const api = await this.client.api(new GetCreativesInAlbums({ creativeId }))
        if (api.succeeded) {
            /** @type {AlbumResult[]} */
            const albums = api.response?.results || []
            this.creativesInAlbumsMap[creativeId] = albums
            await this.loadArtifactsByIds(albums.map(x => x.primaryArtifactId).filter(x => !!x))
            return albums
        }
        return []
    }
    /** @param {AlbumResult} album */
    getAlbumCoverArtifactId(album) {
        return album.primaryArtifactId != null && album.artifactIds.includes(album.primaryArtifactId)
            ? album.primaryArtifactId
            : album.artifactIds[0]
    }
    /** @param {Album|AlbumResult} album */
    albumCover(album) {
        return this.artifactsMap[store.getAlbumCoverArtifactId(album)]
    }
    /** @param {string} albumRef */
    albumByRef(albumRef) {
        //return this.
    }
    
    /** @param {String} creativeId */
    createUrl(creativeId) {
        return `/create?id=${creativeId}`
    }
    /** @param {Artifact} artifact */
    downloadUrl(artifact) {
        return combinePaths(this.BaseUrl, 'download', 'artifact', artifact.refId)
    }
    /** @param {number} artifactId 
     *  @param {String} prompt */
    artViewUrl(artifactId, prompt) {
        return combinePaths(this.BaseUrl, 'artifacts', `${artifactId}`.substring(0,2), `${artifactId}_${generateSlug(prompt)}.html`)
    }
    /** @param {String} modifier */
    searchByModifierUrl(modifier) {
        return `/?modifier=${modifier}`
    }
    /** @param {String} artist */
    searchByArtistUrl(artist) {
        artist = artist.replace(' ',',')
        artist = artist.replaceAll(' ','%20')
        return `/?artist=${artist}`
    }
    /** @param {String} userRef */
    searchByUserUrl(userRef) {
        return `/?user=${userRef}`
    }
    /** @param {String} albumRef */
    searchByAlbumUrl(albumRef, source='in') {
        return `/?album=${albumRef}&source=${source}`
    }
    /** @param {String} refId */
    searchBySimilarUrl(refId) {
        return `/?similar=${refId}`
    }
    get isModerator() {
        const { hasRole } = useAuth()
        return hasRole('Moderator')
    }

    /** @param {Artifact} artifact */
    getPublicUrl(artifact) {
        return this.AssetsBasePath + artifact.filePath
    }

    /** @param {Artifact} artifact */
    hasLiked(artifact) {
        return this.userData && this.userData.user.likes.artifactIds.includes(artifact.id)
    }

    /** @param {number} artifactId */
    async likeArtifact(artifactId) {
        if (!this.auth) return
        const api = await this.client.api(new CreateArtifactLike({ artifactId }))
        if (api.succeeded) {
            this.userData.user.likes.artifactIds.push(artifactId)
        }
    }
    
    /** @param {Artifact|ArtifactResult} artifact */
    isArtifactResult(artifact) {
        return artifact.userPrompt
    }

    /** @param {number} artifactId */
    async unlikeArtifact(artifactId) {
        if (!this.auth) return
        const api = await this.client.apiVoid(new DeleteArtifactLike({ artifactId }))
        if (api.succeeded) {
            const artifactIds = this.userData.user.likes.artifactIds
            const index = artifactIds.indexOf(artifactId)
            console.log('removeIndex', artifactId, index)
            if (index >= 0) {
                artifactIds.splice(index,1)
            }
        }
    }
    /** @param {Creative} creative */
    getArtifacts(creative) {
        if (!creative) return []
        const primary = creative.primaryArtifactId
            ? creative.artifacts.find(x => x.id === creative.primaryArtifactId)
            : null
        if (!primary)
            return creative.artifacts || []

        function sortFn(prop, desc) {
            return (a, b) => {
                if (a[prop] < b[prop]) return desc ? 1 : -1
                if (a[prop] > b[prop]) return desc ? -1 : 1
                return 0
            }
        }
        const sortByScore = sortFn('score', true)
        const sortById = sortFn('id')
        function sortByQualityAndId(a,b) {
            const cmp = sortByScore(a,b)
            return cmp !== 0
                ? cmp
                : sortById(a,b)
        }
        const to = [primary, ...creative.artifacts.filter(x => x.id !== creative.primaryArtifactId).sort(sortByQualityAndId)]
        return to
    }
    
    /** @param {Creative} creative */
    moderatedArtifacts(creative) {
        return this.isModerator
            ? this.getArtifacts(creative)
            : this.getArtifacts(creative).filter(x => x.quality >= 0 && !x.nsfw)
    }

    /** @param {Artifact} artifact */
    hasArtifactInAlbum(artifact) {
        return this.userData && this.userData.user.albums.find(x => x.artifactIds.includes(artifact.id))
    }
    
    /** @param {Artifact} artifact */
    resolveBorderColor(artifact) {
        return this.isModerator && (artifact.quality < 0 || artifact.nsfw)
            ? 'border-slate-500'
            : this.userData == null
                ? 'border-transparent'
                : this.hasLiked(artifact)
                    ? 'border-red-700'
                    : this.hasArtifactInAlbum(artifact)
                        ? 'border-green-700'
                        : 'border-transparent'
    }
    /** @param {Artifact} artifact */
    getBackgroundStyle(artifact) {
        const rgba = (c,opacity) => c.includes('rgb(') 
            ? `rgba(${leftPart(rightPart(c,'('),')')},${opacity})` 
            : c[0] == '#' && c.length >= 7
                ? c.substring(0,7) + (Math.round(128 * opacity)).toString(16).padStart(2,'0')
                : c
        return artifact.background ? `background-color:${rgba(artifact.background,.75)};` : ""
    }
}

class AppCss {
    gridClasses = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
        10: "grid-cols-10",
        11: "grid-cols-11",
        12: "grid-cols-12",
    }
    gridClass(columns) {
        return "grid-cols-3 sm:grid-cols-4 xl:grid-cols-5"
        //return AppCss.gridClasses[columns] || "grid-cols-6"
    }
}
class AppPrefs {
    clientWidth = 1536
    artifactGalleryColumns = 5
    shuffle = true
}

class AppData {
    title = 'Vue Diffusion'
    maxArtifactSize = 10 * 1024 * 1024
    maxAvatarSize = 1024 * 1024
    adminLinks = [{ label:'Admin', href:'/admin' }]
    
    categoryGroups = [
        { name:'Scene',     items:["Quality", "Style", "Aesthetic", "Features", "Medium", "Setting", "Theme"] },
        { name:'Effects',   items:["Effects", "CGI", "Filters", "Lenses", "Photography", "Lighting", "Color"] },
        { name:'Art Style', items:["Art Movement", "Art Style", "18 Century", "19 Century", "20 Century", "21 Century"] },
        { name:'Mood',      items:["Positive Mood", "Negative Mood"] },
    ]
}

/** @param {Ref<ApiResult>} $ref */
export function notifyApiResult($ref) {
    const hold = $ref.value
    $ref.value = new ApiResult()
    $ref.value = hold
}

export function onError(artifact) {
    //return getImageErrorUrl(artifact)
}

/** @param {String} slug */
export function generateSlug(phrase, maxLength=100) {
    let str = phrase
    if (!str) return ''
    str = str.toLowerCase()
        .replaceAll('#','')
        .replaceAll('++','pp')

    str = str.replace(/[^\u0000-\u007F]+/g, '')
    str = str.replace(/"[^a-z0-9\s-]/g, '-')
    str = str.substring(0, Math.min(str.length, maxLength)).trim()
    str = str.replace(/\s+/g, '-')
    str = str.replace(/-+/g, '-')

    if (str[0] === '-')
        str = str.substring(1)
    if (str.length > 0 && str[str.length-1] === '-')
        str = str.substring(0, str.length-1)
    return str
}
