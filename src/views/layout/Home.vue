<template>
  <div class="x-main">
    <x-navbar></x-navbar>
    <div class="x-container">
      <router-view />
    </div>
    <x-footer></x-footer>
    <x-backtop></x-backtop>
    <!-- <x-asider :drawer="isAsider"></x-asider> -->
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
import BackTop from '@/components/BackTop'
// import Asider from './components/Asider'

export default {
  components: {
    'x-navbar': Navbar,
    'x-footer': Footer,
    'x-backtop': BackTop
    // 'x-asider': Asider
  },
  data() {
    return {
      // isAsider: false
    }
  },
  methods: {}
}
</script>
