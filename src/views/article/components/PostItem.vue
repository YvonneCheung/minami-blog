<template>
  <div class="x-post-item animated fadeInDown">
    <div class="x-post-title">
      <h2>{{item.title}}</h2>
    </div>
    <div class="x-post-content">
      <p>{{item.content}}</p>
      <div class="x-post-image"
           :style="backgroundImage"></div>
    </div>
    <div class="x-post-footer">
      <span>{{item.time}}</span>
    </div>
  </div>
</template>

<script>
import setBgImg from '@/utils/backgroundImg'

export default {
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      backgroundImage: setBgImg()
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.item.content = this.item.content.substring(0, 100) + '...'
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
@import '@/assets/styles/mixin.sass'

.x-post-item
  padding: 2rem
  .x-post-title
    margin-bottom: 1.2rem
  .x-post-content
    margin-bottom: 1.2rem
    @include flex
    p
      letter-spacing: 2px
      line-height: 2rem
      font-size: 16px
      font-weight: 300
    .x-post-image
      margin-left: 30px
      @include wh(400px,160px)
  .x-post-footer
    font-size: 12px
    color: #bbb
</style>
