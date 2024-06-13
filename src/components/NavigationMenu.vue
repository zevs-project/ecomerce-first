<template>
  <div class="navigation-menu">
    <nav class="">
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
.page {
  font-family: var(--font-family);
  color: var(--text-color);
}
</style>
