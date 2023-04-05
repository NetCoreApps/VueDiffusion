import { createApp, reactive, nextTick } from "vue"
import { JsonApiClient, $1, $$ } from "@servicestack/client"
import ServiceStackVue, { useConfig, useAuth } from "@servicestack/vue"
import { ArtifactGallery, ArtifactImage } from "./components/Artifacts.mjs"
import { SignInDialog, SignInLink } from "./components/Auth.mjs"
import { BaseUrl, Store } from "./store.mjs"
import { Authenticate } from "./dtos.mjs";

let client = null, store = null, Apps = []
let AppData = {
    init:false
}
export { client, Apps }

/** Shared Components */
const Components = {
    ArtifactGallery, 
    ArtifactImage,
    SignInDialog,
    SignInLink,
}

const { config, setConfig } = useConfig()
setConfig({
    navigate: url => {
        console.log('navigating to ', url)
        location.href = url
    }
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
    nextTick(async () => {
        const { signIn } = useAuth()
        const api = await client.api(new Authenticate())
        if (api.succeeded) {
            signIn(api.response)
        }
    })
    mountAll()

    if (exports) {
        exports.client = client
        exports.Apps = Apps
    }
}
