<template>
  <div class="cart">
    <ShoppingHeader title="购物车" :edit="true"></ShoppingHeader>
    <van-icon name="wap-cart-o" />
    <cartDetail v-if="hasData" :changeShow="changeShow"></cartDetail>
    <emptyPage v-else></emptyPage>
    <shoppingFooter></shoppingFooter>
  </div>
</template>

<style lang="less" scoped>
.cart {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow: auto;
  }
}
</style>

<script setup>
import ShoppingHeader from "@/components/shoppingHeader.vue";
import shoppingFooter from "../../components/shoppingFooter";
import emptyPage from "../../components/emptyPage.vue";
import cartDetail from "./components/cartDetail.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

let hasData = ref(false);
let store = useStore();

function init() {
  if (store.state.cartList.length) {
    hasData.value = true;
  }
}

function changeShow() {
  hasData.value = false;
}

onMounted(() => {
  init();
});
</script>
