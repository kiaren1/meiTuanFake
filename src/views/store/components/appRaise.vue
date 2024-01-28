<template>
  {{ props.appRaiseData.content }}
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["appRaiseData"]);
</script>
