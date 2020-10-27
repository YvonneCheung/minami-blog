<template>
  <div class="x-wrapper">
    <div v-for="(item, index) in timeline" class="x-timeline" :key="index">
      <div class="x-timelin-img"></div>
      <div class="x-timeline-content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
import timeline from '@/mock/time.json'

export default {
  data() {
    return {
      timeline: timeline.timeline
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.x-timeline
  padding: 2rem
  @include flex
  &::after
    content: ' '
    position: absolute
    top: 14px
    left: 0
    z-index: -1
    margin-left: -2px
    width: 4px
    height: 100%
    background: #eee
</style>
