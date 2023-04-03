import { ref, computed, watch, inject, onMounted } from "vue"
import { useClient, useAuth, useUtils, useFormatters } from "@servicestack/vue"
import { queryString, ApiResult, combinePaths } from "@servicestack/client"
import { QueryCreatives } from "dtos.mjs"

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
export const AssetsBasePath = "https://cdn.diffusion.works"
export const FallbackAssetsBasePath = "https://pub-97bba6b94a944260b10a6e7d4bf98053.r2.dev"

export function getPublicUrl(artifact) {
    return AssetsBasePath + artifact.filePath
}
export function onError(artifact) {
    //return getImageErrorUrl(artifact)
}

/** @param {String} slug */
function generateSlug(phrase, maxLength=100) {
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

/** @param {Artifact} artifact
 *  @param {number} selectedId */
export function resolveBorderColor(artifact, selectedId) {
    return 'border-slate-700'
}

export function getAlbumCoverArtifactId(album) {
    return album.primaryArtifactId != null && album.artifactIds.includes(album.primaryArtifactId)
        ? album.primaryArtifactId
        : album.artifactIds[0]
}

/** @param {Artifact} artifact */
export function isArtifactResult(artifact) {
    return true
}

export class UserState {
    artifactsMap = {}
    async loadArtifacts(artifactIds) {

    }
}
export const userState = new UserState()

export const ArtifactImage = {
    template:`<div v-if="artifact" class="overflow-hidden" :style="getBackgroundStyle(artifact)">
      <img :alt="artifact.prompt" :width="width" :height="height" :class="imageClass"
           :src="getPublicUrl(artifact)" loading="lazy" @error="onError(artifact)">
  </div>`,
    props:['artifact','imageClass','minSize'],
    setup(props) {
        const width = computed(() => !props.minSize ? props.artifact.width
            : (props.artifact?.width > props.artifact.height
                ? (props.artifact.width / props.artifact.height) * props.minSize
                : props.minSize))

        const height = computed(() => !props.minSize ? props.artifact.height
            : (props.artifact.height > props.artifact.width
                ? (props.artifact.height / props.artifact.width) * props.minSize
                : props.minSize))

        function getBackgroundStyle(artifact) {
            return ''
        }

        return { width, height, getBackgroundStyle, getPublicUrl, }
    }
}

export const ArtifactGallery = {
    components: {
        ArtifactImage,
    },
    template:`<div>
        <div :class="['grid',AppCss.gridClass(AppPrefs.artifactGalleryColumns)]">
            <div v-for="artifact in results" :key="artifact.id" :class="[artifact.width > artifact.height ? 'col-span-2' : artifact.height > artifact.width ? 'row-span-2' : '']">
                <div @click="navTo(artifact)" class="overflow-hidden flex justify-center">
                    <div class="relative sm:p-2 flex flex-col cursor-pointer items-center" :style="'max-width:' + artifact.width + 'px'"
                         @context-menu="showArtifactMenu($event, artifact)">
    
                        <ArtifactImage :artifact="artifact" :class="['rounded sm:rounded-xl border sm:border-2', resolveBorderColor(artifact, selected?.id)]" />
    
                        <div class="absolute top-0 left-0 w-full h-full group select-none overflow-hidden sm:m-1 rounded sm:rounded-xl">
                            <div class="w-full h-full absolute inset-0 z-10 block text-zinc-100 drop-shadow pointer-events-none line-clamp sm:px-2 sm:pb-2 text-sm opacity-0 group-hover:opacity-40 transition duration-300 ease-in-out bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
    
                            <div class="absolute w-full h-full flex z-10 text-zinc-100 justify-between drop-shadow opacity-0 group-hover:opacity-100 transition-opacity sm:mb-1 text-sm">
                                <div class="relative w-full h-full overflow-hidden flex flex-col justify-between overflow-hidden">
                                    <div class="sm:p-3">
                                        <svg v-if="hasLiked(artifact)" @click.prevent.default="unlikeArtifactAsync(artifact)"
                                             class="w-4 h-4 sm:w-6 sm:h-6 text-red-600 hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <title>undo like</title>
                                            <path fill="currentColor" d="M2 8.4A5.4 5.4 0 0 1 7.5 3A5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z"/>
                                        </svg>
                                        <svg @click.prevent.default="likeArtifactAsync(artifact)"
                                             class="w-4 h-4 sm:w-6 sm:h-6 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <title>like</title>
                                            <path fill="currentColor" d="M12 21c-.645-.572-1.374-1.167-2.145-1.8h-.01c-2.715-2.22-5.792-4.732-7.151-7.742c-.446-.958-.683-2-.694-3.058A5.39 5.39 0 0 1 7.5 3a6.158 6.158 0 0 1 3.328.983A5.6 5.6 0 0 1 12 5c.344-.39.738-.732 1.173-1.017A6.152 6.152 0 0 1 16.5 3A5.39 5.39 0 0 1 22 8.4a7.422 7.422 0 0 1-.694 3.063c-1.359 3.01-4.435 5.521-7.15 7.737l-.01.008c-.772.629-1.5 1.224-2.145 1.8L12 21ZM7.5 5a3.535 3.535 0 0 0-2.5.992A3.342 3.342 0 0 0 4 8.4c.011.77.186 1.53.512 2.228A12.316 12.316 0 0 0 7.069 14.1c.991 1 2.131 1.968 3.117 2.782c.273.225.551.452.829.679l.175.143c.267.218.543.444.81.666l.013-.012l.006-.005h.006l.009-.007h.01l.018-.015l.041-.033l.007-.006l.011-.008h.006l.009-.008l.664-.545l.174-.143c.281-.229.559-.456.832-.681c.986-.814 2.127-1.781 3.118-2.786a12.298 12.298 0 0 0 2.557-3.471c.332-.704.51-1.472.52-2.25A3.343 3.343 0 0 0 19 6a3.535 3.535 0 0 0-2.5-1a3.988 3.988 0 0 0-2.99 1.311L12 8.051l-1.51-1.74A3.988 3.988 0 0 0 7.5 5Z"/>
                                        </svg>
                                    </div>
    
                                    <div v-if="isArtifactResult(artifact)" class="hidden sm:flex bg-black/40 sm:pt-2 sm:pl-4 sm:pb-4 sm:pr-4 w-full">
                                        <div class="w-full">
                                            <h2 class="truncate text-base font-medium text-gray-900 dark:text-gray-200">{{ artifact.userPrompt }}</h2>
                                            <div class="mt-1">
                                                <p v-if="artifact.modifierNames?.length" class="truncate text-xs text-gray-500">
                                                    {{ artifact.modifierNames.join(', ') }}
                                                </p>
                                                <p v-if="artifact.artistNames?.length" class="truncate text-xs text-gray-500">
                                                    by {{ artifact.artistNames.join(', ') }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="sm:mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalDialog v-if="creative" @done="selected = null" class="z-30">
           <div class="pb-8">
                <h2 class="mt-8 text-2xl text-center">{{ creative.userPrompt }}</h2> 
                <div class="text-center mb-4 hidden sm:flex bg-black/40 sm:pt-2 sm:pl-4 sm:pb-4 sm:pr-4 w-full">
                    <div class="w-full">
                        <div class="mt-1">
                            <p v-if="creative.modifierNames?.length" class="mb-2 truncate text-xs text-slate-500">
                                <a v-for="modifier in creative.modifierNames" class="hover:text-slate-300 pr-2" :key="modifier" :href="'/?modifier=' + modifier">{{modifier}}</a>
                            </p>
                            <p v-if="creative.artistNames?.length" class="mb-2 truncate text-xs text-gray-500">
                                by 
                                <a v-for="artist in creative.artistNames" class="hover:text-slate-300 pr-2" :key="artist" :href="'/?artist=' + artist.replace(/\s+/g,',')">{{artist}}</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="relative p-2 w-max flex flex-col mx-auto" @contextmenu.prevent="showArtifactMenu($event, active)">
                    <ArtifactImage :artifact="active" class="rounded sm:rounded-lg" />
        
                    <div class="absolute top-0 left-0 w-full h-full group select-none overflow-hidden sm:m-1 rounded sm:rounded-xl">
                        <div class="w-full h-full absolute inset-0 z-10 block text-zinc-100 drop-shadow pointer-events-none line-clamp px-2 pb-2 text-sm opacity-0 group-hover:opacity-40 transition duration-300 ease-in-out bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
        
                        <div class="absolute w-full h-full flex z-10 text-zinc-100 justify-between drop-shadow opacity-0 group-hover:opacity-100 transition-opacity mb-1 text-sm">
                            <div class="relative w-full h-full overflow-hidden flex flex-col justify-between overflow-hidden">
                                <div class="p-4 flex justify-between flex-none">
                                    <div class="cursor-pointer" @click.prevent.stop="exploreSimilar(selected)">
                                        <svg class="h-6 w-6 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                            <title>explore similar</title>
                                            <path d="m11.25 11.25l3 3"/><circle cx="7.5" cy="7.5" r="4.75"/></g>
                                        </svg>
                                    </div>
                                    <div class="px-1 cursor-pointer" @click.prevent.stop="showArtifactMenu($event, active, 140)">
                                        <svg class="w-5 h-5 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g>
                                        </svg>
                                    </div>
                                </div>
        
                                <div>
                                    <div class="pb-2 px-4">
                                        <svg v-if="hasLiked(active)" @click.prevent.stop="unlikeArtifactAsync(active)"
                                            class="cursor-pointer mr-4 w-6 h-6 text-red-600 hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <title>undo like</title>
                                            <path fill="currentColor" d="M2 8.4A5.4 5.4 0 0 1 7.5 3A5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z" />
                                        </svg>
                                        <svg v-else @click.prevent.stop="likeArtifactAsync(active)"
                                            class="cursor-pointer mr-4 w-6 h-6 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <title>like</title>
                                            <path fill="currentColor" d="M12 21c-.645-.572-1.374-1.167-2.145-1.8h-.01c-2.715-2.22-5.792-4.732-7.151-7.742c-.446-.958-.683-2-.694-3.058A5.39 5.39 0 0 1 7.5 3a6.158 6.158 0 0 1 3.328.983A5.6 5.6 0 0 1 12 5c.344-.39.738-.732 1.173-1.017A6.152 6.152 0 0 1 16.5 3A5.39 5.39 0 0 1 22 8.4a7.422 7.422 0 0 1-.694 3.063c-1.359 3.01-4.435 5.521-7.15 7.737l-.01.008c-.772.629-1.5 1.224-2.145 1.8L12 21ZM7.5 5a3.535 3.535 0 0 0-2.5.992A3.342 3.342 0 0 0 4 8.4c.011.77.186 1.53.512 2.228A12.316 12.316 0 0 0 7.069 14.1c.991 1 2.131 1.968 3.117 2.782c.273.225.551.452.829.679l.175.143c.267.218.543.444.81.666l.013-.012l.006-.005h.006l.009-.007h.01l.018-.015l.041-.033l.007-.006l.011-.008h.006l.009-.008l.664-.545l.174-.143c.281-.229.559-.456.832-.681c.986-.814 2.127-1.781 3.118-2.786a12.298 12.298 0 0 0 2.557-3.471c.332-.704.51-1.472.52-2.25A3.343 3.343 0 0 0 19 6a3.535 3.535 0 0 0-2.5-1a3.988 3.988 0 0 0-2.99 1.311L12 8.051l-1.51-1.74A3.988 3.988 0 0 0 7.5 5Z" />
                                        </svg>
                                    </div>
                                    <div class="mt-4"></div>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
    
                <div class="my-8 flex flex-col items-center">
                    <div class="mb-4 flex">
                        <span class="my-2 mx-4 text-sm text-gray-600 dark:text-gray-400">{{active.height}} x {{active.width}}</span>
                        <span class="my-2 mx-4 text-sm text-gray-600 dark:text-gray-400">{{bytes(active.contentLength)}}</span>
                    </div>
                    <div class="flex flex-wrap">
                        <a class="mb-4 flex text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" :href=getDownloadUrl(active) target="_blank">
                            <svg class="w-5 h-5 mr-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" /></svg>
                            download
                        </a>
                        <a :href="'/create?id=' + selected.creativeId"
                            class="ml-8 mb-4 flex text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            <svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M13.74 10.25h8.046v2.626l7.556-4.363l-7.556-4.363v2.598H9.826c1.543.864 2.79 2.174 3.915 3.5zm8.046 10.404c-.618-.195-1.407-.703-2.29-1.587c-1.79-1.756-3.713-4.675-5.732-7.227c-2.05-2.486-4.16-4.972-7.45-5.09h-3.5v3.5h3.5c.655-.028 1.682.485 2.878 1.682c1.788 1.753 3.712 4.674 5.73 7.226c1.922 2.33 3.908 4.64 6.864 5.016v2.702l7.556-4.362l-7.556-4.362v2.502z" />
                            </svg>
                            new from this
                        </a>
                        <a :href="getArtViewUrl(active)" target="_blank"
                            class="ml-8 mb-4 flex text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            <svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243l-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243l-1.414-1.414L8.586 17zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1zm1 2v7h12V5H6z" />
                            </svg>
                            art view
                        </a>
                    </div>
                </div>
        
                <div class="flex flex-wrap justify-center">
                    <div v-for="a in moderatedArtifacts(creative)" :key="a.id" @click="navTo(selected.id, a.id)"
                        class="relative overflow-hidden cursor-pointer">
                        <div class="relative flex justify-center mr-1 mb-1 sm:mr-4 sm:mb-4">
                            <ArtifactImage :artifact="a" :minSize="128" 
                                :class="['rounded sm:rounded-xl border-2 max-w-[108px] sm:max-w-none object-cover', resolveBorderColor(a, viewing?.id)]"  />
            
                            <div class="absolute top-0 left-0 w-full h-full group select-none overflow-hidden rounded sm:rounded-xl">
                                <div class="w-full h-full absolute inset-0 z-10 block text-zinc-100 drop-shadow pointer-events-none line-clamp sm:px-2 sm:pb-2 text-sm opacity-0 group-hover:opacity-40 transition duration-300 ease-in-out bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="mt-2 flex justify-center">
                    <a :href="'/?user=' + creative.ownerRef"
                        class="ml-8 mb-4 flex text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                        <svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 4a6.5 6.5 0 0 1 4.932 10.734l5.644 5.644l-.707.707l-5.645-5.645A6.5 6.5 0 1 1 9.5 4Zm0 1a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z" /></svg>
                        by creator
                    </a>
                </div>
    
                <div v-if="artifactAlbums.length" class="ml-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
                    <div class="flex whitespace-nowrap w-24">
                        <svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 4a6.5 6.5 0 0 1 4.932 10.734l5.644 5.644l-.707.707l-5.645-5.645A6.5 6.5 0 1 1 9.5 4Zm0 1a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z" /></svg>
                        top albums
                    </div>
                    <div class="flex flex-wrap">
                        <a :key="album.albumRef" :href="'/?album=' + album.albumRef + '&source=in'" class="flex flex-col group mr-2">
                            <div class="mt-2 hover:opacity-80 cursor-pointer h-24 w-24 overflow-hidden rounded sm:rounded-lg border sm:border-2 border-transparent">
                                <ArtifactImage :artifact="albumCover(album)" class="flex w-full h-full" imageClass="object-cover" />
                            </div>
                            <div class="w-24 text-xs text-center overflow-hidden group-hover:text-gray-200">
                                {{ album.name }}
                            </div>
                        </a>
                    </div>
                </div>
                <div v-if="isModerator" class="mt-12 text-center">
                    <ConfirmDelete @delete="hardDelete(selected.creativeId)" />
                </div>
            </div>
        </ModalDialog>
    </div>`,
    props:['results'],
    setup(props) {
        const client = useClient()
        const apiBaseUrl = inject('client').baseUrl
        const { hasRole } = useAuth()
        const { pushState } = useUtils()
        const { bytes } = useFormatters()

        const selected = ref()
        const viewing = ref()
        const active = computed(() => viewing.value || selected.value)
        const apiCreative = ref(new ApiResult())
        const creative = computed(() => apiCreative.value.response?.results?.[0])
        const artifactAlbums = computed(() => [])
        const isModerator = computed(() => hasRole('Moderator'))

        /** @param {Artifact} artifact */
        function hasLiked(artifact) {
            return false
        }

        /** @param {Artifact} artifact */
        function navTo(artifact) {
            const args = artifact ? { id: artifact.creativeId, artifactId: artifact.id } : undefined
            selected.value = artifact 
            pushState(args)
        }

        /** @param {Artifact} artifact */
        function unlikeArtifactAsync(artifact) {
        }
        /** @param {Artifact} artifact */
        function likeArtifactAsync(artifact) {
        }
        /** @param {Artifact} artifact */
        function getDownloadUrl(artifact) {
            return combinePaths(apiBaseUrl, 'download', 'artifact', artifact.refId)
        }
        /** @param {Artifact} artifact */
        function getArtViewUrl(artifact) {
            return combinePaths(apiBaseUrl, 'artifacts', `${artifact.id}`.substring(0,2), `${artifact.id}_${generateSlug(artifact.userPrompt)}.html`)
        }
        /** @param {MouseEvent} e
         *  @param {Artifact} artifact */
        function showArtifactMenu(e, artifact) {
            
        }
        /** @param {Creative} creative */
        function getArtifacts(creative) {
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
        function moderatedArtifacts(creative) {
            return isModerator.value
                ? getArtifacts(creative)
                : getArtifacts(creative).filter(x => x.quality >= 0 && !x.nsfw)
        }
        /** @param {number} creativeId */
        function hardDelete(creativeId) {
            
        }

        watch([selected], async () => {
            apiCreative.value = selected.value
                ? await client.api(new QueryCreatives({ id: selected.value.creativeId }))
                : new ApiResult()
        })
        
        onMounted(() => {
            const qs = queryString(location.search)
            const id = qs.id
        })

        return { 
            AppCss, AppPrefs, selected, creative, viewing, active, artifactAlbums, isModerator,
            resolveBorderColor, hasLiked, isArtifactResult, bytes,
            navTo, likeArtifactAsync, unlikeArtifactAsync, moderatedArtifacts, hardDelete,
            showArtifactMenu, getDownloadUrl, getArtViewUrl,
        }
    }
}
