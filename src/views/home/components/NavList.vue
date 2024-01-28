<template>
  <div class="nav-list">
    <div v-for="(item, index) in navList" :key="index">
      <nav-list-item :itemContent="item" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import NavListItem from "./NavListItem.vue";
defineProps(["navList"]);
</script>
