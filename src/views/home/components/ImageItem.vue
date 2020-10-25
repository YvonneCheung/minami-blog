<template>
  <div class="x-banner-img fadeInDown animated"
       :style="backgroundImage"></div>
</template>

<script>
import setBgImg from '@/utils/backgroundImg'

export default {
  components: {},
  props: {},
  data() {
    return {
      backgroundImage: setBgImg()
    }
  }
}
</script>

