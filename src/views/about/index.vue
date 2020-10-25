<template>
  <div class="x-about">
    <div class="x-about-header">
      <img src="../../assets/image/avatar.png"
           width="100"
           height="100">
      <h2>南雫</h2>
      <p>想成为文艺诗人与浪漫极客的渣渣程序媛。</p>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/mixin.sass'

.x-about-header
  @include flex($dire:column)
</style>
