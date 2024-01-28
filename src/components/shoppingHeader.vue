<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="toBack" />
    <div>{{ title }}</div>
    <!-- <div class="edit" v-if="edit" @click="handleEdit"></div>
    {{ store.state.edit ? "编辑" : "完成" }} -->
    <div class="edit" v-if="edit" @click="handleEdit">
      {{ store.state.edit ? "编辑" : "完成" }}
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import router from "../router/index";
import { defineProps } from "vue";
import { showToast } from "vant";

defineProps(["title", "edit"]);
let store = useStore();

function toBack() {
  router.back();
}

function handleEdit() {
  if (store.state.cartList.length) {
    store.commit("edit");
    store.commit("changeDelete");
  } else {
    showToast("购物车为空,无法编辑");
  }
}
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  .edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
  }
  .icon {
    position: absolute;
    left: 10px;
  }
}
</style>
