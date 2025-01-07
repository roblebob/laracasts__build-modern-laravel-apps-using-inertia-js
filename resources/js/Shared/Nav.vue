<script>
import { Link } from '@inertiajs/vue3';
import NavLink from "./NavLink.vue";

export default {
    components: {
        NavLink,
        Link,
    },
};

</script>



<template>
    <nav class="mt-6">
        <ul class="list-disc">
            <li><NavLink href="/"       :active="$page.url === '/'" >Home</NavLink></li>

            <li><NavLink href="/users"  :active="$page.url.startsWith('/users')" >Users</NavLink></li>

            <li><NavLink href="/settings" :active="$page.component === 'Settings'" >Settings</NavLink></li>
        </ul>
    </nav>
</template>





<style scoped>

</style>
