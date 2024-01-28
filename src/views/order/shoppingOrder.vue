<template>
  <div class="order">
    <shoppingHeader title="订单"></shoppingHeader>

    <div class="content">
      <van-tabs color="#ffDC01" class="tabs" swipeable>
        <van-tab v-for="(item, index) in navData" :key="index" :title="item">
          <div v-if="index === 0 && store.state.orderListEnd.length">
            <div v-for="(item, index) in store.state.orderListEnd" :key="index">
              <van-card
                :num="item.num"
                :price="item.price"
                :title="item.title"
                :thumb="item.pic"
              />
            </div>
          </div>
          <emptyPage v-else></emptyPage>
        </van-tab>
      </van-tabs>
    </div>

    <shoppingFooter></shoppingFooter>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import shoppingFooter from "../../components/shoppingFooter";
import shoppingHeader from "../../components/shoppingHeader.vue";
import emptyPage from "../../components/emptyPage.vue";

let navData = ["全部", "交易完成", "待付款", "待完成"];
let store = useStore();
</script>

<style lang="less" scoped>
.order {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow: auto;
    height: 100%;
  }
}
</style>
