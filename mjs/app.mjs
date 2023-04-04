import { createApp, reactive, ref, nextTick } from "vue"
import { JsonApiClient, ApiResult, nameOf, appendQueryString, $1, $$ } from "@servicestack/client"
import ServiceStackVue, { useConfig } from "@servicestack/vue"

const BaseUrl = globalThis.BaseUrl = location.origin === 'http://localhost:5000' || location.origin === 'http://localhost:8080'
    ? 'https://localhost:5001'
    : 'https://api.blazordiffusion.com/'

let client = null, Apps = []
let AppData = {
    init:false
}
export { client, Apps }

/** Shared Components */
const Components = {
}

const { config, setConfig } = useConfig()
setConfig({
    navigate: url => {
        console.log('navigating to ', url)
        location.href = url
    }
})

/** @param {Ref<ApiResult>} $ref */
export function notifyApiResult($ref) {
    const hold = $ref.value
    $ref.value = new ApiResult()
    $ref.value = hold
}

export function useSwrClient(options) {
    //const api = ref(new ApiResult())
    const storage = config.value.storage
    function cacheKey(request) {
        const key = appendQueryString(`swr.${nameOf(request)}`, request)
        return key
    }
    function fromCache(key) {
        const json = storage.getItem(key)
        const ret = json
            ? JSON.parse(json)
            : null
        if (ret) {
            console.log(key, json?.substring(0,100) + '...')
        }
        return ret
    }
    
    async function api(request, fn) {
        const key = cacheKey(request)

        fn(new ApiResult({ response: fromCache(key) }))
        const api = await client.api(request)
        if (api.succeeded && api.response) {
            api.response._date = new Date().valueOf()
            const json = JSON.stringify(api.response)
            storage.setItem(key, json)
            console.log(`set ${key}`, json?.substring(0,100) + '...')
            fn(api)
        }
    }
    
    return { api } 
}

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
    AppData = reactive(AppData)
    AppData.init = true
    mountAll()

    if (exports) {
        exports.client = client
        exports.Apps = Apps
    }
}
