import { createApp, h } from 'vue'
import {createInertiaApp, Head, Link} from '@inertiajs/vue3'
import '../css/app.css'
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    resolve: async name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: false })
        const page = await pages[`./Pages/${name}.vue`]();

        page.default.layout ??= Layout;  //if (! page.layout) { page.default.layout = Layout;}

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            //.component('Link', Link)
            .component('Head', Head)
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
    title: title => `My App - ${title}`,
})
