<template>
  <div class="x-wrapper">
    <h2>{{ postDetail.title }}</h2>
    <div>{{ postDetail.content }}</div>
  </div>
</template>

<script>
import post from '@/mock/post.json'

export default {
  data() {
    return {
      postDetail: {}
    }
  },
  mounted() {
    this.postDetail = post.post.filter(
      item => item.id == this.$route.params.id
    )[0]
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.x-wrapper
  padding: 2rem
  @include flex($dire:column)
</style>
