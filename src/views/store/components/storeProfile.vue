<template>
  {{ props.storeProfileData.content }}
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["storeProfileData"]);
</script>
