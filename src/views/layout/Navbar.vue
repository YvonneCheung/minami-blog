<template>
  <div class="x-navbar">
    <div class="x-navbar-logo"> Minami Shizuku</div>
    <ul class="x-navbar-items">
      <li v-for="(item, index) in menus"
          :key="index"
          class="x-navbar-item">
        <router-link :to="item.path">{{ item.name }}</router-link>
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
