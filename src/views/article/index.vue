<template>
  <div class="x-wrapper">
    <post-item v-for="item in post"
               :key="item.id"
               :item="item">
    </post-item>
  </div>
</template>

<script>
import PostItem from './components/PostItem'
import post from '@/mock/post.json'

export default {
  components: { PostItem },
  data() {
    return {
      post: post.post
    }
  },

  methods: {}
}
</script>
<style lang="sass" scoped>

</style>
