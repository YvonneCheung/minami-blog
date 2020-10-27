<template>
  <div class="x-navbar-items">
    <div v-for="(item, index) in menus" :key="index" class="x-navbar-item">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import menus from '@/mock/menu.json'

export default {
  data() {
    return {
      menus: menus.menus
    }
  },
  methods: {}
}
</script>
