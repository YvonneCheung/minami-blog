<template>
  <div class="x-banner">
    <div class="x-banner-imgs ">
      <image-item v-for="index of 6"
                  :key="index"></image-item>
    </div>
  </div>
</template>

<script>
import setBgImg from '@/utils/backgroundImg'
import ImageItem from './components/ImageItem'

export default {
  components: { ImageItem },
  data() {
    return {
      backgroundImage: setBgImg()
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
@import '@/assets/styles/mixin.sass'
@import '@/assets/styles/variable.sass'

.x-banner
  overflow: auto
  background-color: $background
  @include flex
  .x-banner-imgs
    overflow: auto
    padding: 5em 4em
    @include flex($wrap:wrap)
    .x-banner-img
      width: 400px
      height: 314.29px
</style>
