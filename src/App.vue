<template>
  <section class="hero is-info is-large">
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </section>
</template>

<script>

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer
  }
}
</script>

<style>
#app{
  min-height: 100%
}
</style>
