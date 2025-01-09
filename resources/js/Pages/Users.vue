<script setup>
import {Link} from '@inertiajs/vue3';
import {defineProps, defineOptions} from 'vue';
// import Layout from "../Shared/Layout.vue";

defineProps({
    time: String,
});

// defineOptions({
//     layout: Layout,
// });

</script>

<!--<script>-->
<!--import Layout from '../Shared/Layout.vue';-->

<!--export default {-->
<!--    layout: Layout-->
<!--};-->
<!--</script>-->


<template>
    <h1 class="text-4xl font-bold">Users</h1>


    <div style="margin-top: 800px">
        <p>The current time is {{ time }}</p>
        <Link
            href="/users"
            class="text-blue-500 hover:underline"
            preserve-scroll
        >Refresh
        </Link>
    </div>
</template>


<style scoped>

</style>
