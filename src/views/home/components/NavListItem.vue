<template>
  <div class="item" @click="toStore">
    <img :src="itemContent.pic" />
    <div class="item-right">
      <div class="title">{{ itemContent.title }}</div>
      <div class="sales">{{ itemContent.sales }}</div>
      <div class="price">起送费 ￥{{ itemContent.price }} 免配送费</div>
      <div class="label">
        <div v-for="(item, index) in itemContent.label" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import router from "../../../router/index";

function toStore() {
  router.push("/store");
}
defineProps(["itemContent"]);
</script>

<style lang="less" scoped>
.item:not(:first-child) {
  margin-top: 10px;
}
.item {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .item-right {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  .title {
    font-size: 18px;
  }
  .label {
    display: flex;
    div {
      background-color: #ffc400;
      padding: 2px 5px;
      border-radius: 5px;
    }
    div:not(:first-child) {
      margin-left: 5px;
    }
  }
}
</style>
