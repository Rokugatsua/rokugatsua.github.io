<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid ">
      <router-link to="/" class="navbar-brand ms-lg-4">Rokugatsua</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto me-4">
          <li class="nav-item d-lg-none">
            <router-link to="/" 
              :class="['nav-link', isActive === 'Home' ? 'active text-primary': '']"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project" 
              :class="['nav-link', isActive === 'Project' ? 'active text-primary': '']"
            >
              Project
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" 
              :class="['nav-link', isActive === 'About' ? 'active text-primary': '']"
            >
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" 
              :class="['nav-link', isActive === 'Blog' ? 'active text-primary': '']"
            >
              Blog
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" 
              :class="['nav-link', isActive === 'Contact' ? 'active text-primary': '']"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // isActive: 'home'
    }
  },
  computed:{
    isActive() {
      return this.$route.name
    }
  }
}
</script>