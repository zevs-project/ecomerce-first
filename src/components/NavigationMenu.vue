<template>
  <div class="navigation-menu">
    <nav class="navigation">
      <router-link
        :to="{ name: String(nav.name) }"
        v-for="nav in navList"
        :key="nav.text"
        >{{ nav.text }}</router-link
      >
    </nav>
  </div>
</template>

<script setup>
/* import { ref, reactive } from "vue"; */
import { defineProps } from "vue";
defineProps({
  navList: {
    type: Array,
  },
});
</script>

<style lang="scss">
.navigation-menu {
  display: flex;
  align-content: center;
  font-family: var(--font-family);
  color: var(--text-color);
  width: 310px;

  .navigation {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
