import { ref, computed, watch, inject, onMounted, onUnmounted, getCurrentInstance } from "vue"
import { useClient, useAuth, useUtils, useFormatters } from "@servicestack/vue"
import { queryString, ApiResult, combinePaths } from "@servicestack/client"
import { HardDeleteCreative, QueryArtifacts, QueryCreatives } from "../dtos.mjs"
import { Store, AppCss, AppPrefs } from "../store.mjs"

/** @param {Artifact} artifact */
export function isArtifactResult(artifact) {
    return true
}

export const ArtifactImage = {
    template:`<div v-if="artifact" class="overflow-hidden" :style="store.getBackgroundStyle(artifact)">
      <img :alt="artifact.prompt" :width="width" :height="height" :class="imageClass"
           :src="store.getPublicUrl(artifact)" loading="lazy" @error="onError(artifact)">
  </div>`,
    props:['artifact','imageClass','minSize'],
    setup(props) {
        /** @type {Store} */
        const store = inject('store')
        const width = computed(() => !props.minSize ? props.artifact.width
            : (props.artifact?.width > props.artifact.height
                ? (props.artifact.width / props.artifact.height) * props.minSize
                : props.minSize))

        const height = computed(() => !props.minSize ? props.artifact.height
            : (props.artifact.height > props.artifact.width
                ? (props.artifact.height / props.artifact.width) * props.minSize
                : props.minSize))

        return { store, width, height, }
    }
}

export const ArtifactGallery = {
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
                                        <svg v-if="store.hasLiked(artifact)" @click.prevent.stop="unlikeArtifact(artifact)"
                                             class="w-4 h-4 sm:w-6 sm:h-6 text-red-600 hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <title>undo like</title>
                                            <path fill="currentColor" d="M2 8.4A5.4 5.4 0 0 1 7.5 3A5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z"/>
                                        </svg>
                                        <svg v-else @click.prevent.stop="likeArtifact(artifact)"
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
        <ModalDialog v-if="creative" @done="modalClose()" class="z-30">
           <div class="pb-8">
                <h2 class="mt-8 mx-8 mb-4 text-2xl text-center">{{ creative.userPrompt }}</h2> 
                <div class="text-center hidden sm:flex bg-black/40 sm:pl-4 sm:pb-4 sm:pr-4 w-full">
                    <div class="w-full">
                        <div class="mt-1">
                            <p v-if="creative.modifierNames?.length" class="mb-2 truncate text-xs text-slate-500">
                                <a v-for="modifier in creative.modifierNames" class="hover:text-slate-300 pr-2" :key="modifier" :href="store.searchByModifierUrl(modifier)">{{modifier}}</a>
                            </p>
                            <p v-if="creative.artistNames?.length" class="mb-2 truncate text-xs text-gray-500">
                                by 
                                <a v-for="artist in creative.artistNames" class="hover:text-slate-300 pr-2" :key="artist" :href="store.searchByArtistUrl(artist)">{{artist}}</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="flex justify-center">
                    <div class="group px-4 cursor-pointer flex items-center select-none" @click="navNext(-1)">
                        <svg class="w-8 h-8 text-slate-700 group-hover:text-slate-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"/></svg>
                    </div>
                    <div>
                        <div class="relative p-2 w-max flex flex-col mx-auto" @contextmenu.prevent="showArtifactMenu($event, active)">
                            <ArtifactImage :artifact="active" class="rounded sm:rounded-lg" />
                
                            <div class="absolute top-0 left-0 w-full h-full group select-none overflow-hidden sm:m-1 rounded sm:rounded-xl">
                                <div class="w-full h-full absolute inset-0 z-10 block text-zinc-100 drop-shadow pointer-events-none line-clamp px-2 pb-2 text-sm opacity-0 group-hover:opacity-40 transition duration-300 ease-in-out bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
                
                                <div class="absolute w-full h-full flex z-10 text-zinc-100 justify-between drop-shadow opacity-0 group-hover:opacity-100 transition-opacity mb-1 text-sm">
                                    <div class="relative w-full h-full overflow-hidden flex flex-col justify-between overflow-hidden">
                                        <div class="p-4 flex justify-between flex-none">
                                            <div class="cursor-pointer">
                                                <a :href="store.searchBySimilarUrl(selected.refId)">
                                                <svg class="h-6 w-6 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                                    <title>explore similar</title>
                                                    <path d="m11.25 11.25l3 3"/><circle cx="7.5" cy="7.5" r="4.75"/></g>
                                                </svg></a>
                                            </div>
                                            <div class="px-1 cursor-pointer" @click.prevent.stop="showArtifactMenu($event, active, 140)">
                                                <svg class="w-5 h-5 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g>
                                                </svg>
                                            </div>
                                        </div>
                
                                        <div>
                                            <div class="pb-2 px-4">
                                                <svg v-if="store.hasLiked(active)" @click.prevent.stop="unlikeArtifact(active)"
                                                    class="cursor-pointer mr-4 w-6 h-6 text-red-600 hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <title>undo like</title>
                                                    <path fill="currentColor" d="M2 8.4A5.4 5.4 0 0 1 7.5 3A5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z" />
                                                </svg>
                                                <svg v-else @click.prevent.stop="likeArtifact(active)"
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
                    </div>
                    <div class="group px-4 cursor-pointer flex items-center select-none" @click="navNext(1)">
                        <svg class="w-8 h-8 text-slate-700 group-hover:text-slate-300 rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"/></svg>
                    </div>
                </div>
    
                <div class="my-8 flex flex-col items-center">
                    <div class="mb-4 flex">
                        <span class="my-2 mx-4 text-sm text-gray-600 dark:text-gray-400">{{active.height}} x {{active.width}}</span>
                        <span class="my-2 mx-4 text-sm text-gray-600 dark:text-gray-400">{{bytes(active.contentLength)}}</span>
                    </div>
                    <div class="flex flex-wrap">
                        <a class="mb-4 flex text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" :href=store.downloadUrl(active) target="_blank">
                            <svg class="w-5 h-5 mr-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" /></svg>
                            download
                        </a>
                        <a :href="store.createUrl(creative.id)"
                            class="ml-8 mb-4 flex text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            <svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M13.74 10.25h8.046v2.626l7.556-4.363l-7.556-4.363v2.598H9.826c1.543.864 2.79 2.174 3.915 3.5zm8.046 10.404c-.618-.195-1.407-.703-2.29-1.587c-1.79-1.756-3.713-4.675-5.732-7.227c-2.05-2.486-4.16-4.972-7.45-5.09h-3.5v3.5h3.5c.655-.028 1.682.485 2.878 1.682c1.788 1.753 3.712 4.674 5.73 7.226c1.922 2.33 3.908 4.64 6.864 5.016v2.702l7.556-4.362l-7.556-4.362v2.502z" />
                            </svg>
                            new from this
                        </a>
                        <a :href="store.artViewUrl(active.id,creative.userPrompt)" target="_blank"
                            class="ml-8 mb-4 flex text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            <svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243l-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243l-1.414-1.414L8.586 17zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1zm1 2v7h12V5H6z" />
                            </svg>
                            art view
                        </a>
                    </div>
                </div>
        
                <div class="flex flex-wrap justify-center">
                    <div v-for="a in moderatedArtifacts(creative)" :key="a.id" @click="navTo(a)"
                        class="relative overflow-hidden cursor-pointer">
                        <div class="relative flex justify-center sm:mx-2 sm:mb-4">
                            <ArtifactImage :artifact="a" :minSize="118" 
                                :class="['rounded sm:rounded-xl border-2 max-w-[118px] sm:max-w-none object-cover', resolveBorderColor(a, active?.id)]"  />
            
                            <div class="absolute top-0 left-0 w-full h-full group select-none overflow-hidden rounded sm:rounded-xl">
                                <div class="w-full h-full absolute inset-0 z-10 block text-zinc-100 drop-shadow pointer-events-none line-clamp sm:px-2 sm:pb-2 text-sm opacity-0 group-hover:opacity-40 transition duration-300 ease-in-out bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="mt-2 flex justify-center">
                    <a :href="store.searchByUserUrl(creative.ownerRef)"
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
                        <a :key="album.albumRef" :href="store.searchByAlbumUrl(album.albumRef)" class="flex flex-col group mr-2">
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
        <SignInDialog v-if="showAuth && !showSignUp" @done="showAuth=false" @signup="showSignUp=true"/>
        <SignUpDialog v-if="showAuth && showSignUp" @done="showAuth=false"  @signin="showSignUp=false"/>
    </div>`,
    props:['results'],
    setup(props) {
        const client = useClient()
        /** @type {Store} */
        const store = inject('store')
        const { user, hasRole } = useAuth()
        const { pushState } = useUtils()
        const { bytes } = useFormatters()
        const instance = getCurrentInstance()
        
        const selected = ref()
        const viewing = ref()
        const showAuth = ref(false)
        const showSignUp = ref(false)

        const active = computed(() => viewing.value || selected.value)
        const apiCreative = ref(new ApiResult())
        const creative = computed(() => apiCreative.value.response?.results?.[0])
        const artifactAlbums = computed(() => [])
        const isModerator = computed(() => hasRole('Moderator'))

        function navNext(next) {
            const artifacts = moderatedArtifacts(creative.value)
            const pos = artifacts.findIndex(x => x.id === selected.value.id)
            if (pos !== -1) {
                const nextPos = (pos + next) < 0 ? artifacts.length - 1 : (pos + next) % artifacts.length 
                const nextArtifact = artifacts[nextPos]
                navTo(nextArtifact)
            }
        }
        /** @param {KeyboardEvent} e */
        function handleNav(e) {
            if (e.key === 'ArrowLeft') {
                navNext(-1)                
            } else if (e.key === 'ArrowRight') {
                navNext(1)
            }
        }
        
        /** @param {Artifact} artifact */
        function navTo(artifact) {
            const args = artifact ? { id: artifact.id } : undefined
            selected.value = artifact 
            pushState(args)
        }
        
        function modalClose() {
            selected.value = null
            viewing.value = null
            pushState({ id:undefined, artifactId:undefined })
        }
        
        /** @param {Artifact} artifact
         *  @param {number} [selectedId] */
        function resolveBorderColor(artifact, selectedId) {
            return selectedId && artifact.id == selectedId
                ? 'border-yellow-300'
                : store.resolveBorderColor(artifact)
        }
        
        /** @param {Artifact} artifact */
        async function unlikeArtifact(artifact) {
            if (!user.value) {
                showAuth.value = true
                return
            }
            await store.unlikeArtifact(artifact.id)
            instance?.proxy?.$forceUpdate()
        }
        /** @param {Artifact} artifact */
        async function likeArtifact(artifact) {
            if (!user.value) {
                showAuth.value = true
                return
            }
            await store.likeArtifact(artifact.id)
            instance?.proxy?.$forceUpdate()
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
        async function hardDelete(creativeId) {
            const api = await client.api(new HardDeleteCreative({ id: creativeId }))
            if (api.succeeded) {
                modalClose()
            }
        }
        
        watch([selected], async () => {
            apiCreative.value = selected.value
                ? await client.api(new QueryCreatives({ id: selected.value.creativeId }))
                : new ApiResult()
            if (selected.value)
                await store.creativesInAlbumsMap[selected.value.creativeId]
        })
        
        onMounted(async () => {
            const qs = queryString(location.search)
            if (qs.id) {
                const api = await client.api(new QueryArtifacts({ id: qs.id }))
                if (api.succeeded) {
                    selected.value = api.response.results[0]
                }
            }
            document.addEventListener('keydown', handleNav)
        })
        onUnmounted(() => document.removeEventListener('keydown', handleNav))

        return { 
            AppCss, AppPrefs, store, selected, creative, viewing, active, artifactAlbums, isModerator,
            isArtifactResult, bytes,
            navTo, navNext, handleNav, modalClose, likeArtifact, unlikeArtifact, moderatedArtifacts, hardDelete,
            resolveBorderColor, showArtifactMenu,
            showAuth, showSignUp,
        }
    }
}
