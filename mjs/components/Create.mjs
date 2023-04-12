import { ref, computed, watch, inject, onMounted, onUnmounted, getCurrentInstance } from "vue"
import { useClient, useAuth, useUtils, useFormatters } from "@servicestack/vue"
import { queryString, ApiResult, combinePaths, map } from "@servicestack/client"
import {
    QueryCreatives, CreateCreative, SearchData, SearchDataResponse,
    ArtistInfo, ModifierInfo, UpdateCreative,
} from "../dtos.mjs"
import { Store } from "../store.mjs"

export default {
    template:/*html*/`<div>
    <form class="mt-4 mb-20 mx-auto shadow overflow-hidden sm:rounded-md w-[420px] sm:w-[600px]" @submit.prevent="noop">
        <ErrorSummary except="userPrompt,images,width,height" />

        <div class="px-4 space-y-6 p-2 sm:p-6">
            <div class="flex justify-center">
                <div @click="imageSize = 'square'" :class="['mr-4 flex flex-col items-center hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer', imageSize == 'square' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400']">
                    <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M14 14v20h20V14H14Zm-1-2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H13Z" clip-rule="evenodd" /></svg>
                    <span class="text-sm">square</span>
                </div>
                <div @click="imageSize = 'portrait'" :class="['mr-4 flex flex-col items-center hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer', imageSize == 'portrait' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400']">
                    <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" transform="translate(5 3)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z" /><circle cx="5.5" cy="11.5" r="1" fill="currentColor" /></g></svg>
                    <span class="text-sm">portrait</span>
                </div>
                <div @click="imageSize = 'landscape'" :class="['flex flex-col items-center hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer', imageSize == 'landscape' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400']">
                    <svg class="w-12 h-12 rotate-90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" transform="translate(5 3)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z" /><circle cx="5.5" cy="11.5" r="1" fill="currentColor" /></g></svg>
                    <span class="text-sm">landscape</span>
                </div>
            </div>
        </div>

        <div v-if="dataCache">

            <div class="mx-auto w-[420px]">
                <Autocomplete id="artistIds" label="" :options="artistOptions" multiple v-model="artists" placeholder="Select Artist Style" @click="closeDialogs"
                    :match="(x, value) => x.name.toLowerCase().includes(value.toLowerCase()) || x.type?.toLowerCase().includes(value.toLowerCase())">
                    <template #item="{ name, type }">
                        <div class="flex justify-between">
                            <span class="truncate">{{name}}</span>
                            <span class="text-gray-400 truncate -mr-6">{{type}}</span>
                        </div>
                    </template>
                </Autocomplete>
            </div>

            <div v-if="artists.length" class="m-4 flex flex-wrap">
                <div :key="artist.id" v-for="artist in artists" class="pt-2 pr-2">
                    <span class="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300">
                        {{ artist.name }}
                        <button type="button" @click="removeArtist(artist)" class="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black">
                            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8"><path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7"></path></svg>
                        </button>
                    </span>
                </div>
            </div>

            <div class="mt-8 mx-auto w-[420px]">
                <Autocomplete id="modifierIds" label="" :options="modifierOptions" multiple v-model="modifiers" placeholder="Select Modifiers" @click="closeDialogs"
                    :match="(x, value) => map(value.includes('-') ? value.trim().replaceAll('-',' ') : value.trim(), v => 
                             x.name.toLowerCase().includes(v.toLowerCase()) ||
                             x.category.toLowerCase().includes(v.toLowerCase()))">
                    <template #item="{ name, category }">
                        <div class="flex justify-between">
                            <span class="truncate">{{ name }}</span>
                            <span class="text-gray-400 truncate -mr-6">{{ category }}</span>
                        </div>
                    </template>
                </Autocomplete>
            </div>

            <div v-if="modifiers.length" class="m-4 flex flex-wrap">
                <div :key="modifier.id" v-for="modifier in modifiers" class="pt-2 pr-2">
                    <span class="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300">
                        {{ modifier.name }}
                        <button type="button" @click="removeModifier(modifier)" class="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black">
                            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8"><path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7"></path></svg>
                        </button>
                    </span>
                </div>
            </div>

            <div class="mt-8">
                <div class="sm:hidden">
                    <label for="groups" class="sr-only">Select a tab</label>
                    <select id="groups" name="tabs" class="block w-full dark:bg-black rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            @change="selectGroup">
                        <option :key="group.name" v-for="group in store.data.categoryGroups">{{group.name}}</option>
                    </select>
                </div>
                <div class="hidden sm:block">
                    <div class="border-b border-gray-200 dark:border-gray-800">
                        <nav class="-mb-px flex" aria-label="Tabs">
                            <button :key="group.name" v-for="group in store.data.categoryGroups" @click="selectGroup(group.name)" :class="[group.name == selectedGroup
                                ? 'border-indigo-500 dark:border-gray-100 text-indigo-600 dark:text-gray-100' : 'border-transparent text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:border-gray-300 dark:hover:border-gray-500',
                                  'cursor-pointer w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm']">{{ group.name }}</button>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="md:inset-y-0 md:flex md:w-[8.5rem] shrink-0">
                    <div class="flex min-h-0 flex-1 flex-col bg-white dark:bg-gray-800">
                        <div class="flex flex-1 flex-col overflow-y-auto">
                            <nav class="flex-1 space-y-1 px-2 py-4">
                                <button :key="category" v-for="category in groupCategories" @click="selectCategory(category)" :class="[category == selectedCategory
                                    ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white',
                                        'w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md']">{{ category }}</button>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="flex grow p-2">
                    <div>
                        <div class="grid grid-cols-3 gap-2">
                            <span :key="modifier.id" v-for="modifier in categoryModifiers" @click="addModifier(modifier)" class="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">{{modifier.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4 p-2 flex flex-col gap-y-4">
            <TextInput input-class="!text-lg" v-model="request.userPrompt" spellcheck="false" placeholder="Description of Image" label="" @click="closeDialogs" />
        </div>

        <div class="mt-4 mx-auto flex justify-center">
            <div class="flex flex-col">

                <PrimaryButton @click="submit" style="sky" class="!rounded-full !text-lg font-normal" :disabled="loading">
                    Generate
                </PrimaryButton>

                <button :class="['mt-2 mb-4', isDirty ? '' : 'invisible']" @click.stop="reset">reset</button>
            </div>
        </div>
    </form>
    <div v-if="loading" class="mt-20 mb-32 flex justify-center">
        <Loading class="text-gray-300 font-normal" imageClass="w-7 h-7 mt-1.5">generating images...</Loading>
    </div>
    <div v-for="c in creatives">
        <div class="flex justify-between items-center">
            <div></div>
            <div class="flex justify-center items-center">
                <a class="cursor-pointer my-4 flex justify-center items-center text-xl hover:underline underline-offset-4" @click.prevent="populateForm(c)" title="New from this">            
                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M13.74 10.25h8.046v2.626l7.556-4.363l-7.556-4.363v2.598H9.826c1.543.864 2.79 2.174 3.915 3.5zm8.046 10.404c-.618-.195-1.407-.703-2.29-1.587c-1.79-1.756-3.713-4.675-5.732-7.227c-2.05-2.486-4.16-4.972-7.45-5.09h-3.5v3.5h3.5c.655-.028 1.682.485 2.878 1.682c1.788 1.753 3.712 4.674 5.73 7.226c1.922 2.33 3.908 4.64 6.864 5.016v2.702l7.556-4.362l-7.556-4.362v2.502z" />
                    </svg>
                    {{c.userPrompt}}
                </a>
                <div class="group flex cursor-pointer" @click="discard(c)">
                    <svg class="ml-8 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"></path><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"></path></svg>
                    <div class="ml-1 invisible group-hover:visible">discard</div>
                </div>
            </div>
            <div class="flex items-center">
                <span v-if="!c.primaryArtifactId" title="pin cover image to appear in search results">
                    <svg class="w-6 h-6 text-yellow-400 cursor-help" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72Zm-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72ZM120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
                </span>
            </div>
        </div>
        <div :class="['grid',store.css.gridClass(store.prefs.artifactGalleryColumns)]">
            <div v-for="artifact in store.moderatedArtifacts(c)" :key="artifact.id" :class="[artifact.width > artifact.height ? 'col-span-2' : artifact.height > artifact.width ? 'row-span-2' : '']">
                <div @click="showArtifact(artifact)" class="overflow-hidden flex justify-center">
                    <div class="relative sm:p-2 flex flex-col cursor-pointer items-center" :style="'max-width:' + artifact.width + 'px'"
                         @context-menu="showArtifactMenu($event, artifact)">
    
                        <ArtifactImage :artifact="artifact" :class="['sm:rounded lg:rounded-xl border sm:border-2', resolveBorderColor(artifact, artifact.id == c.primaryArtifactId)]" />
    
                        <div class="absolute top-0 left-0 w-full h-full group select-none overflow-hidden sm:m-1 rounded sm:rounded-xl">
                            <div class="w-full h-full absolute inset-0 z-10 block text-zinc-100 drop-shadow pointer-events-none line-clamp sm:px-2 sm:pb-2 text-sm opacity-0 group-hover:opacity-40 transition duration-300 ease-in-out bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
    
                            <div class="absolute w-full h-full flex z-10 text-zinc-100 justify-between drop-shadow opacity-0 group-hover:opacity-100 transition-opacity sm:mb-1 text-sm">
                                <div class="relative p-4 w-full h-full overflow-hidden flex flex-col justify-between overflow-hidden">
                                    <div class="flex justify-between flex-none">
                                        <div class="cursor-pointer" @click.stop.prevent="">
                                            <svg v-if="artifact.id == c.primaryArtifactId" @click.stop.prevent="unpinArtifact(c,artifact)"
                                                    class="w-6 h-6 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                <title>unpin</title>
                                                <path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" />
                                            </svg>
                                            <svg v-else @click.stop.prevent="pinArtifact(c,artifact)"
                                                    class="w-6 h-6 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <title>pin as cover image</title>
                                                <path fill="currentColor" d="M18.27 9.81h-2.82L9.77 4.13l.71-.71l-1.42-1.41l-7.07 7.07l1.42 1.41l.71-.71l5.67 5.68h-.01v2.83l1.42 1.42l3.54-3.55l4.77 4.77l1.41-1.41l-4.77-4.77l3.53-3.53l-1.41-1.41z" />
                                            </svg>
                                        </div>
    
                                        <div class="px-1 cursor-pointer" @click.stop.prevent="showArtifactMenu($event, artifact, 140)">
                                            <svg class="w-5 h-5 text-cyan-600 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g>
                                            </svg>
                                        </div>
                                    </div>

                                    <div class="sm:pb-1">
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
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ArtifactModal v-if="active" :artifact="active" @selected="showArtifact" @done="showArtifact(null)" />
    <SignInDialog v-if="showAuth && !showSignUp" @done="showAuth=false" @signup="showSignUp=true" />
    <SignUpDialog v-if="showAuth && showSignUp" @done="showAuth=false"  @signin="showSignUp=false" />
    <div class="mt-12 flex justify-center">
        <loading v-if="loadingMore" class="text-gray-400">loading...</loading>
        <span ref="bottom"></span>
    </div>
    </div>`,
    setup(props) {
        /** @type {Store} */
        const store = inject('store')
        const client = useClient()
        const { user } = useAuth()
        const { pushState } = useUtils()
        const instance = getCurrentInstance()
        const qs = queryString(location.search) 
        
        const api = ref(new ApiResult())
        /** @type {Ref<CreateCreative>} */
        const request = ref(new CreateCreative())
        /** @type {Ref<ArtistInfo[]>} */
        const artists = ref([])
        /** @type {Ref<ModifierInfo[]>} */
        const modifiers = ref([])
        /** @type {Ref<SearchDataResponse>} */
        const dataCache = ref()
        /** @type {Ref<Creative>} */
        const creative = ref()
        /** @type {Ref<Creative[]>} */
        const creativeHistory = ref([])
        /** @type {ComputedRef<Creative[]>} */
        const creatives = computed(() => creative.value 
            ? [creative.value, ...creativeHistory.value.filter(x => x.id !== creative.value.id)] 
            : creativeHistory.value)
        /** @type {Ref<{id?:number,view?:number}|null>} */
        const selected = ref({ id:qs.id, view:qs.view })
        const showAuth = ref(false)
        const showSignUp = ref(false)
        const active = ref()

        /** @type {ComputedRef<ArtistInfo[]>} */
        const artistOptions = computed(() => dataCache.value?.artists || [])
        /** @type {ComputedRef<ModifierInfo[]>} */
        const modifierOptions = computed(() => dataCache.value?.modifiers || [])
        const groupCategories = computed(() => store.data.categoryGroups.find(x => x.name === selectedGroup.value)?.items || [])
        const categoryModifiers = computed(() => (selectedCategory.value 
            ? dataCache.value?.modifiers.filter(x => x.category === selectedCategory.value && !modifiers.value.includes(x))
            : null) || [])
        const imageSize = ref('square')
        const isDirty = computed(() => !!request.value.userPrompt
            || imageSize.value !== 'square'
            || artists.value.length > 0
            || modifiers.value.length > 0)
        const loading = ref(false)
        function noop(){}
        function navTo(creativeId, artifactId) {
            console.log('navTo', creativeId, artifactId)
            if (!creativeId) {
                selected.value = null
                pushState({ id:undefined, view:undefined })
            } else {
                selected.value = { id:creativeId, view: artifactId || undefined }
                pushState(selected.value)
            }
            loadCreative(creativeId)
        }
        async function loadCreative(creativeId) {
            if (creativeId) {
                creative.value = store.creativesMap[creativeId]
                if (!creative.value) {
                    const api = await client.api(new QueryCreatives({ id:creativeId }))
                    if (api.succeeded) {
                        creative.value = api.response.results?.[0]
                        if (creative.value) {
                            store.loadCreative(creative.value)
                        }
                    }
                }
            } else {
                creative.value = null
            }
            return creative.value
        }
        
        /** @param {Creative} creative */
        function populateForm(creative) {
            if (creative) {
                navTo(creative.id)
                request.value.userPrompt = creative.userPrompt
                imageSize.value = creative.width > creative.height
                    ? 'landscape'
                    : creative.height > creative.width
                        ? 'portrait'
                        : 'square'
                artists.value = creative.artists?.map(x => artistOptions.value.find(a => a.id === x.artistId)) || []
                modifiers.value = creative.modifiers?.map(x => modifierOptions.value.find(a => a.id === x.modifierId)) || []
                document.documentElement.scrollIntoView({ behavior: "smooth" })
            } else {
                reset()
            }
        }
        
        /** @param {Artifact} artifact */
        async function showArtifact(artifact) {
            console.log('showArtifact', artifact)
            active.value = artifact ? store.artifactsMap[artifact.id] : null
            pushState({ view: artifact ? artifact.id : undefined })
            // undefined == deleted, null == @done
            if (artifact === undefined) {
                selected.value = null
                closeDialogs()
                await loadHistory(true)
            }
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

        /** @param {Creative} creative */
        async function discard(creative) {
            creativeHistory.value = creativeHistory.value.filter(x => x.id !== creative.id) 
            await store.softDelete(creative)
        }
        
        function closeDialogs() {
            if (!selected.value?.view) {
                navTo(selected.value?.id)
            }
        }

        async function submit() {
            request.value.images = 4
            request.value.width = imageSize.value === 'portrait'
                ? 512
                : imageSize.value === 'landscape'
                    ? 896
                    : 512
            request.value.height = imageSize.value === 'portrait'
                ? 896
                : imageSize.value === 'landscape'
                    ? 512
                    : 512
            request.value.artistIds = artists.value.map(x => x.id)
            request.value.modifierIds = modifiers.value.map(x => x.id)
            loading.value = true
            api.value = await client.api(request.value)
            if (api.value.succeeded) {
                creative.value = api.value.response.result
                navTo(creative.value.id)
            }
            loading.value = false
            await loadHistory(true)
        }

        /** @param {Creative} c
          * @param {Artifact} artifact */
        async function pinArtifact(c,artifact) {
            const hold = c.primaryArtifactId
            c.primaryArtifactId = artifact.id
            instance?.proxy?.$forceUpdate()

            const api = await client.api(new UpdateCreative({ id:artifact.creativeId, primaryArtifactId:artifact.id }))
            if (api.succeeded) {
                store.updatePrimaryArtifact(c, artifact.id, creativeHistory.value)
            } else {
                c.primaryArtifactId = hold
            }
            instance?.proxy?.$forceUpdate()
            await fetchHistory({skip:0}, x => null) //update swr cache
        }

        /** @param {Creative} c
          * @param {Artifact} artifact */
        async function unpinArtifact(c,artifact) {
            const hold = c.primaryArtifactId
            c.primaryArtifactId = null
            instance?.proxy?.$forceUpdate()

            const api = await client.api(new UpdateCreative({ 
                id:artifact.creativeId, 
                primaryArtifactId:artifact.id,
                unpinPrimaryArtifact:true
            }))
            if (api.succeeded) {
                store.updatePrimaryArtifact(c, null, creativeHistory.value)
            } else {
                c.primaryArtifactId = hold
            }
            instance?.proxy?.$forceUpdate()
            await fetchHistory({skip:0}, x => null) //update swr cache
        }
        async function fetchHistory({ skip }, fn) {
            const request = new QueryCreatives({
                ownerId: parseInt(user.value.userId),
                take: 10,
                skip,
                orderByDesc:'id',
            })
            if (skip === 0) {
                return await client.swr(request, fn)
            } else {
                const api = await client.api(request)
                if (api.succeeded) {
                    fn(api)
                }
            }
        }

        function reset() {
            closeDialogs()
            request.value.userPrompt = ''
            imageSize.value = 'square'
            artists.value.length = 0
            modifiers.value.length = 0
        }
        
        const loadingMore = ref(false)
        const bottom = ref()
        async function loadHistory(clear=false) {
            if (user.value) {
                loadingMore.value = true
                await fetchHistory({ skip: clear ? 0 : creativeHistory.value.length }, api => {
                    if (api.response) {
                        if (clear) creativeHistory.value = []
                        creativeHistory.value.push(...api.response.results)
                        store.loadCreatives(creativeHistory.value)
                    }
                })
                loadingMore.value = false
            }
        }

        const selectedGroup = ref('Scene')
        function selectGroup(group) {
            selectedGroup.value = group
            selectedCategory.value = store.data.categoryGroups.find(x => x.name === selectedGroup.value)?.items.find(x => !!x)
        }

        const selectedCategory = ref('Quality')
        function selectCategory(category) {
            selectedCategory.value = category
        }
        const removeArtist = artist => artists.value = artists.value.filter(x => x !== artist)
        const addModifier = modifier => modifiers.value.push(modifier)
        const removeModifier = modifier => modifiers.value = modifiers.value.filter(x => x !== modifier)

        /** @param {Artifact} artifact
         *  @param {boolean} [selected] */
        function resolveBorderColor(artifact, selected) {
            return selected
                ? 'border-yellow-300'
                : store.resolveBorderColor(artifact)
        }
        

        let observer = null
        onMounted(async () => {
            await Promise.all([
                loadCreative(qs.id),
                client.swr(new SearchData(), async api => dataCache.value = api.response),
                loadHistory(),
            ])
            if (qs.view) {
                active.value = store.artifactsMap[qs.view]
            }
            populateForm(creative.value)
            setTimeout(() => {
                observer = new IntersectionObserver(
                    ([{isIntersecting, target}]) => {
                        if (isIntersecting) loadHistory()
                    }, { threshold: 1.0 })
                observer.observe(bottom.value)
            }, 1000)
        })
        onUnmounted(() => observer.unobserve())
        
        return { 
            store, api, loading, request, artists, modifiers, dataCache, artistOptions, modifierOptions, isDirty, groupCategories,
            creative, creatives, loadingMore, bottom, categoryModifiers, imageSize, selected, showAuth, showSignUp, active,
            resolveBorderColor, noop, navTo, populateForm, closeDialogs, submit, reset, map, showArtifact,
            selectedGroup, selectGroup, selectedCategory, selectCategory, removeArtist, addModifier, removeModifier, discard,
            likeArtifact, unlikeArtifact, pinArtifact, unpinArtifact, 
        }
    }
}