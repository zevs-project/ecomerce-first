<template>
  <div class="root" :style="currentTheme">
    <router-link :to="{ name: 'men' }">Men</router-link>
    <router-link :to="{ name: 'women' }">Women</router-link>

    <button @click="setTheme('lightTheme')">Light Theme</button>
    <button @click="setTheme('darkTheme')">Dark Theme</button>

    <router-view></router-view>
  </div>
</template>

<script>
import { darkTheme } from './styles/themes/darkTheme';
import { lightTheme } from './styles/themes/lightTheme';
export default {
  name: "App",
  data() {
    return  {
       currentTheme: lightTheme,
    }
  },
  components: {},
  methods: {
    setTheme(theme) {
      this.currentTheme = theme === 'lightTheme' ? lightTheme : darkTheme;
    },
  },
  async mounted() {
  }
};
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
@import "./styles/index.scss";
</style>
