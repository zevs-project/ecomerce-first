<template>
  <header>
    <img src="./../../assets/images/header-logo.png" alt="Header logo">
    <NavigationMenu :nav-list="navList"></NavigationMenu>
  </header>
</template>

<script setup>
import NavigationMenu from "./../../components/NavigationMenu.vue";
import { reactive } from "vue";
/* import { ref, reactive } from "vue"; */
import { defineProps } from "vue";
defineProps({});
const navList = reactive([
  { name: "men", text: "Men", useNamedPath: true },
  { name: "women", text: "Women", useNamedPath: true },
  { name: "kids", text: "Kids", useNamedPath: true },
  { name: "shop", text: "Shop", useNamedPath: true },
  { name: "contactUs", text: "Contact us", useNamedPath: true },
]);
</script>

<style lang="scss"></style>
