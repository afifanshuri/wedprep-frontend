<template >
  <main class="h-screen">
    <Navbar/>
    <h1 class="font-Inter font-bold">Your dream wedding, reimagined.</h1>
    <section class="self-center">
      <router-link :to="{name:'cateringPage'}">Catering</router-link>
    </section>
  </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue';

export default{
  name: 'home',
    components: {
        Navbar
    }
}
</script>