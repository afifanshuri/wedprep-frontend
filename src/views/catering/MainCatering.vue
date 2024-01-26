<template>
    <main class="h-screen">
        <Navbar/>
        <h1>Catering Page</h1>
        <button class="btn btn-outline-primary">
            <router-link :to="{name:'addCateringPage'}">Add A Catering</router-link>
        </button>
        <button class="btn btn-outline-primary">
            <router-link :to="{name:'viewCateringPage'}">View All Catering</router-link>
        </button>
        <router-view></router-view>
    </main>
    
        
    
</template>

<script>
    import Navbar from '../../components/Navbar.vue';

    export default {
    name: 'mainCatering',
    components: {
        Navbar
    }}
</script>