<template>
  <div class="root" :style="currentTheme">
    <HeaderWrapper></HeaderWrapper>
    <router-view></router-view>
  </div>
</template>

<script>
import { darkTheme } from "./styles/themes/darkTheme";
import { lightTheme } from "./styles/themes/lightTheme";

import HeaderWrapper from "./views/localViews/HeaderWrapper.vue"

export default {
  name: "App",
  data() {
    return {
      currentTheme: lightTheme,
     
    };
  },
  components: {
    HeaderWrapper,
  },
  methods: {
    setTheme(theme) {
      this.currentTheme = theme === "lightTheme" ? lightTheme : darkTheme;
    },
  },
  async mounted() {},
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
