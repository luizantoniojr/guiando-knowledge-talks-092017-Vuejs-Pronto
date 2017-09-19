<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <router-link to="/List">Clique aqui!</router-link>
        </h1>
        <h2 class="subtitle">
          E comece a organizar suas tarefas
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app-navbar'
}
</script>

<style>
  .logo {
    font-family: 'Sedgwick Ave Display';
    font-size: 30px
  }

  .nav-left {
    overflow: hidden
  }
</style>
