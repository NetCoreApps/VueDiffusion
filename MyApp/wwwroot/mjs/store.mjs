import { GetCreativesInAlbums } from "./dtos.mjs"
import { ApiResult, combinePaths } from "@servicestack/client";

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
    artifactsMap = {}
    creativesInAlbumsMap = {}
    client = null
    constructor(client) {
        this.client = client
    }
    async loadArtifacts(artifactIds) {
    }
    /** @param {number} creativeId */
    async getCreativeInAlbums(creativeId) {
        if (!creativeId)
            return []
        if (this.creativesInAlbumsMap[creativeId])
            return this.creativesInAlbumsMap[creativeId]
        const api = await this.client.api(new GetCreativesInAlbums({ creativeId }))
        if (api.succeeded) {
            return this.creativesInAlbumsMap[creativeId] = api.response?.results || []
        }
        return []
    }
    /** @param {AlbumResult} album */
    getAlbumCoverArtifactId(album) {
        return album.primaryArtifactId != null && album.artifactIds.includes(album.primaryArtifactId)
            ? album.primaryArtifactId
            : album.artifactIds[0]
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

    /** @param {Artifact} artifact */
    getPublicUrl(artifact) {
        return this.AssetsBasePath + artifact.filePath
    }
    /** @param {Artifact} artifact */
    resolveBorderColor(artifact) {
        return 'border-slate-700'
    }
    /** @param {Artifact} artifact */
    getBackgroundStyle(artifact) {
        return ''
    }
}

export const AppCss = {
    gridClasses: {
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
    },
    gridClass(columns) {
        return AppCss.gridClasses[columns] || "grid-cols-6"
    }
}
export const AppPrefs = {
    clientWidth: 1536,
    artifactGalleryColumns: 5,
    shuffle: true,
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
