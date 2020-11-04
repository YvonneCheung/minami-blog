<template>
  <div class="x-post-item animated fadeInDown">
    <div class="x-post-title">
      <h2 @click="$router.push(`/article/detail/${post.id}`)">
        {{ post.title }}
      </h2>
    </div>
    <div class="x-post-content">
      <p>{{ post.content }}</p>
      <div class="x-post-image"
           :style="backgroundImage"></div>
    </div>
    <div class="x-post-footer">
      <span>{{ post.time }}</span>
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
      default: () => { }
    }
  },
  data () {
    return {
      post: {},
      backgroundImage: setBgImg()
    }
  },
  watch: {},
  computed: {},
  created () { },
  mounted () {
    this.post = JSON.parse(JSON.stringify(this.item))
    this.post.content = this.post.content.substring(0, 100) + '...'
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.x-post-item
  padding: 2rem
  .x-post-title
    margin-bottom: 0.2rem
    cursor: pointer
  .x-post-content
    margin-bottom: 0.2rem
    @include flex
    p
      letter-spacing: 2px
      line-height: 2rem
      font-size: 14px
      font-weight: 300
    .x-post-image
      margin-left: 30px
      @include wh(400px,160px)
  .x-post-footer
    font-size: 12px
    color: $textSub
</style>
