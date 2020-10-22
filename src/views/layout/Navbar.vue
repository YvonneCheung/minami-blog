<template>
  <div class="x-navbar">
    <div class="x-navbar-logo">南雫Minami Shizuku</div>
    <ul class="x-navbar-items">
      <li v-for="(item, index) in menus" :key="index" class="x-navbar-item">
        <a>{{ item.title }}</a>
      </li>
    </ul>
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
