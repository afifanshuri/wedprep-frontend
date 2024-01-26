<template >
  <main class="h-screen">
    <Navbar/>
    <h1 class="font-Inter font-bold">Your dream wedding, reimagined.</h1>
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