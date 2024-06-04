<template>
  <router-link :to="{name: 'men'}">Men</router-link>
  <router-link :to="{name: 'women'}">Women</router-link>

  <router-view></router-view>\
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="scss">
@import './styles/index.scss';
</style>
