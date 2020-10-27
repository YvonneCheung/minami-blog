<template>
  <div class="x-navbar animated fadeInDown" v-show="scrollTop < 120">
    <div class="x-navbar-logo">
      <router-link to="/">Minami Shizuku</router-link>
    </div>
    <!-- <i class="iconfont icon-more-line" @click="openSidebar"></i> -->
    <navbar-link></navbar-link>
  </div>
</template>

<script>
import NavbarLink from './components/NavbarLink'

export default {
  components: { NavbarLink },
  data() {
    return {
      scrollTop: 0
    }
  },
  mounted() {
    window.addEventListener(
      'scroll',
      () => {
        this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
      },
      false
    )
  },
  methods: {}
}
</script>
