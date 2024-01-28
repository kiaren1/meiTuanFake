<template>
  <div class="create-order">
    <shoppingHeader title="生成订单" />
    <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
    <div class="content">
      <div v-for="(item, index) in store.state.orderList" :key="index">
        <van-card
          :num="item.num"
          :price="item.price"
          :title="item.title"
          :thumb="item.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>￥{{ totalPrice }}</span>
      </div>
      <van-button
        type="primary"
        class="pay-btn"
        block
        color="#ffc400"
        @click="handleCreateOrder"
        >生成订单</van-button
      >
    </div>
  </div>
</template>

<script setup>
import shoppingHeader from "../../components/shoppingHeader";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { showDialog } from "vant";
import { useRoute } from "vue-router";
import router from "../../router/index.js";
let store = useStore();
let tel = ref("12345678");
let name = ref("kkk");
let route = useRoute();
let totalPrice = ref(0);

onMounted(() => {
  initPrice();
  initUser();
});
//初始化订单价格
function initPrice() {
  let price = 0;
  if (store.state.orderList.length) {
    store.state.orderList.forEach((item) => {
      price += item.num * item.price;
    });
  }
  totalPrice.value = price;
}
//初始化用户地址
function initUser() {
  store.state.userAddress.forEach((item) => {
    if (item.isDefault) {
      name.value = item.name;
      tel.value = item.tel;
    }
  });
}

//编辑地址
function onEdit() {
  router.push("/shoppingAddress");
}

//处理下单请求
function handleCreateOrder() {
  showDialog({
    title: "提示",
    message: "生成订单成功",
    theme: "round-button",
  }).then(() => {
    let newList = store.state.cartList.filter((item) => {
      return !route.query.list.includes(item.id + ""); //把item.id转换为字符串
    });
    store.commit("delete", newList);
    store.commit("orderListEd");
    router.push("/order");
    //下单后移除购物车已经下单的商品
  });
}
</script>

<style lang="less" scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;

  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
