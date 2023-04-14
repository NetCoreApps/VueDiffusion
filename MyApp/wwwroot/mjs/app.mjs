import { createApp, reactive, nextTick } from "vue"
import { JsonApiClient, ApiResult, $1, $$, queryString, combinePaths } from "@servicestack/client"
import ServiceStackVue, { useConfig, useClient, useAuth } from "@servicestack/vue"
import { 
    AlbumTitle, ArtifactMenu, NewReport, NewAlbum,
    ArtifactDialogs, ArtifactLikeIcon, ArtifactExploreIcon, ArtifactMenuIcon, 
    ArtifactGallery, ArtifactModal, ArtifactImage 
} from "./components/Artifacts.mjs"
import { SignInDialog, SignUpDialog, SignInLink, AvatarImage } from "./components/Auth.mjs"
import { AssetsBasePath, BaseUrl, FallbackAssetsBasePath, Store } from "./store.mjs"
import { Authenticate } from "./dtos.mjs"

let client = null, store = null, Apps = []
let AppData = {
    init:false
}
export { client, Apps }

/** Shared Components */
const Components = {
    AlbumTitle,
    ArtifactMenu,
    NewReport,
    NewAlbum,
    ArtifactDialogs,
    ArtifactLikeIcon,
    ArtifactExploreIcon,
    ArtifactMenuIcon,
    ArtifactGallery,
    ArtifactModal,
    ArtifactImage,
    SignInDialog,
    SignUpDialog,
    SignInLink,
    AvatarImage,
}

const { config, setConfig } = useConfig()
setConfig({
    navigate: url => {
        console.log('navigating to ', url)
        location.href = url
    },
    assetsPathResolver: path => {
        return path.includes('://')
            ? path
            : combinePaths(store.AssetsBasePath, path)
    },
    fallbackPathResolver: path => {
        return path.includes('://')
            ? path
            : combinePaths(store.FallbackAssetsBasePath, path)
    },
})

const alreadyMounted = el => el.__vue_app__ 

/** Mount Vue3 Component
 * @param sel {string|Element} - Element or Selector where component should be mounted
 * @param component 
 * @param [props] {any} */
export function mount(sel, component, props) {
    if (!AppData.init) {
        init(globalThis)
    }
    const el = $1(sel)
    if (alreadyMounted(el)) return
    const app = createApp(component, props)
    app.provide('client', client)
       .provide('store', store)
    Object.keys(Components).forEach(name => {
        app.component(name, Components[name])
    })
    app.use(ServiceStackVue)
    app.component('RouterLink', ServiceStackVue.component('RouterLink'))
    app.mount(el)
    Apps.push(app)
    return app
}

export function mountAll() {
    $$('[data-component]').forEach(el => {
        if (alreadyMounted(el)) return
        let componentName = el.getAttribute('data-component')
        if (!componentName) return
        let component = Components[componentName] || ServiceStackVue.component(componentName)
        if (!component) {
            console.error(`Could not create component ${componentName}`)
            return
        }

        let propsStr = el.getAttribute('data-props')
        let props = propsStr && new Function(`return (${propsStr})`)() || {}
        mount(el, component, props)
    })
}

/** @param {any} [exports] */
export function init(exports) {
    if (AppData.init) return
    client = JsonApiClient.create(BaseUrl)
    store = new Store(client)
    AppData = reactive(AppData)
    AppData.init = true
    
    const qs = queryString(location.search)
    if (qs.clear === 'storage') {
        localStorage.clear()
    }
    
    nextTick(async () => {
        store.load()
        const api = await client.api(new Authenticate())
        if (api.succeeded) {
            store.signIn(api.response)
        } else {
            store.signOut()
            const protectedPages = ['/create','/favorites']
            if (protectedPages.some(path => path === location.pathname)) {
                location.href = '/'
            }
        }
    })
    mountAll()

    if (!exports) {
        exports = globalThis
    }
    exports.client = client
    exports.Apps = Apps
    exports.store = store
    exports.AppData = AppData
}
