<script>
import {Link} from "@inertiajs/vue3";
export default {
    components: { Link, },
    props: {
        active: Boolean,
    }
};
</script>


<template>
    <Link class="text-black hover:underline"
          :class="{ 'font-bold underline': active }"
    ><slot /></Link>
</template>



<style scoped>

</style>
