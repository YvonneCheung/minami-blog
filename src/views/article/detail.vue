<template>
  <div class="x-wrapper">
    <h1 class="post-title">{{ postDetail.title }}</h1>
    <div class="post-info">
      <span>南雫</span>
      <span></span>
    </div>
    <div class="post-content">{{ postDetail.content }}</div>
  </div>
</template>

<script>
import post from '@/mock/post.json'

export default {
  data () {
    return {
      postDetail: {}
    }
  },
  mounted () {
    this.postDetail = post.post.filter(
      item => item.id == this.$route.params.id
    )[0]
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.x-wrapper
  @include flex($dire:column)
  .post-title
    margin-bottom: 2rem
  .post-info
    padding: 1rem
  .post-content
    font-size: 15px
    line-height: 2rem
</style>
