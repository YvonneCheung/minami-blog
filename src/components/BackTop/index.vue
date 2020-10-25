<template>
  <div class="x-backtop animated fadeInUp"
       v-show="scrollTop">
    <div class="iconfont icon-backtop"
         @click="backTop"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      scrollTop: 0
    }
  },
  watch: {},
  computed: {},
  created() {},
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
  methods: {
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  }
}
</script>
