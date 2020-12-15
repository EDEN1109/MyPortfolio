<template>
  <div class="app_nav">
        <button class="title_font" v-for="menu in menuList" :key="menu.id" @click="move(menu)">{{menu}}</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Home from "./Home";

export default {
  data() {
    return {
      menuList: ['HOME', 'ABOUT', 'SKILL', 'PROJECT', 'CONTACT']
    }
  },
  methods: {
    move(menu) {
        this.$emit('move', menu)
    },
  },
}
</script>

<style lang="scss" scpoed>
@media(min-width: 801px){
  .app_nav {
    z-index: 1;
    width: 100%;
    height: 50px;
    padding-left: 10%;
    border-bottom: 2px solid var(--neon-color);
    background-color: #04011d;
    position: fixed;

    button {
      width: 120px;
      height: 30px;
      padding: 10px;
      background-color: transparent;
      font-size: 24px;
      color: var(--neon-color);
      -webkit-text-stroke: 0px;

      &:hover {
          color: var(--point-color);
      }
    }
  }
}
@media (max-width: 800px) {
  .app_nav {
    display: none;
  }
}
</style>
