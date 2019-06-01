<template>
    <div id="app">
        <TopMenu></TopMenu>
        <router-view/>
    </div>
</template>

<script>
    import TopMenu from '@/components/TopMenu';

    export default {
        name: 'App',
        components: {
            TopMenu,
        }
    }
</script>

<style>

</style>
