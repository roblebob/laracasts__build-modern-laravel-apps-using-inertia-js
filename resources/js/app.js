import { createApp, h } from 'vue'
import {createInertiaApp, Link} from '@inertiajs/vue3'
import '../css/app.css'
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    resolve: async name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: false })
        const page = await pages[`./Pages/${name}.vue`]();

        //if (! page.layout) { page.default.layout = Layout;}
        page.default.layout ??= Layout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            //.component('Link', Link)
            .mount(el)
    },
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,

        // The color of the progress bar...
        color: 'red',

        // Whether to include the default NProgress styles...
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: true,
    },
})
