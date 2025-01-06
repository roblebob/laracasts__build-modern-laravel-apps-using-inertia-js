<script>
    export default {
        props: {
            name: String,
            frameworks: Array,
        },
    };

</script>

<template>
    <div>
        <h1>Welcome, {{ name }}</h1>

        <p>In this series, we use </p>

        <ul>
            <li v-for="framework of frameworks"  v-text="framework"></li>
        </ul>
    </div>
</template>

<style scoped>

</style>
