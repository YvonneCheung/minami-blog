<template>
  <div class="x-main">
    <x-navbar></x-navbar>
    <div class="x-container">
      <router-view />
    </div>
    <x-footer></x-footer>
    <x-backtop></x-backtop>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
import BackTop from '@/components/BackTop'

export default {
  components: { 'x-navbar': Navbar, 'x-footer': Footer, 'x-backtop': BackTop },
  data() {
    return {}
  },
  methods: {}
}
</script>
