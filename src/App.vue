<template>
  <navbar />
  <div class="container-lg d-flex flex-column content main-bg min-vh-100">
    <div class="mb-auto d-flex flex-column h-100 ">
      <router-view />
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FootNav from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FootNav
  }
}
</script>
