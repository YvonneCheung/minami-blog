<template>
  <div class="x-main">
    <x-navbar></x-navbar>
    <div class="x-container">
      <router-view />
    </div>
    <x-footer></x-footer>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  components: { 'x-navbar': Navbar, 'x-footer': Footer },
  data() {
    return {}
  },
  methods: {}
}
</script>
