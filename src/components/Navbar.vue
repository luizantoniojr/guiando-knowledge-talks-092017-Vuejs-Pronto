<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <router-link to="/"><span class="logo">2do</span></router-link>
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'app-navbar'
}
</script>

<style scoped>
.logo {
  font-family: 'Sedgwick Ave Display';
  font-size: 30px
}

.nav-left {
  overflow: hidden
}
</style>
