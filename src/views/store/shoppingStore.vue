<template>
  <div class="storeDetails">
    <shoppingHeader title="店铺" />

    <div class="content">
      <div class="img"></div>
      <div class="foodSort">
        <div class="name">
          {{ storeDataRes.title }}
          <img :src="storeDataRes.img" class="store-img" />
        </div>
        <div class="sort">
          <van-tabs color="#FFDC01">
            <van-tab title="点菜">
              <FoodList :foodData="storeDataRes.storeData[0].data" />
            </van-tab>
            <van-tab title="评价">
              <appRaise :appRaiseData="storeDataRes.storeData[1].data" />
            </van-tab>
            <van-tab title="商家">
              <StoreProfile
                :storeProfileData="storeDataRes.storeData[2].data"
              />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>

    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :badge="store.state.cartList ? store.state.cartList.length : 0"
        @click="goCart"
      />

      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="handleAddCart"
      />

      <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
    </van-action-bar>
  </div>
</template>

<script setup>
import shoppingHeader from "../../components/shoppingHeader.vue";
import appRaise from "./components/appRaise";
import StoreProfile from "./components/storeProfile";
import router from "../../router/index";
// import { ref } from "vue";
import { defineProps } from "vue";
import FoodList from "./components/FoodList";
import { reactive } from "vue";
import { useStore } from "vuex";
import { showToast } from "vant";

let store = useStore();

defineProps(["img"]);

const storeDataRes = reactive({
  title: "鱼拿酸菜鱼",
  storeImg:
    "https://img1.baidu.com/it/u=671019587,1535002884&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
  storeData: [
    {
      name: "点菜",
      data: {
        content: "点菜",
        items: [
          {
            text: "热销套餐",
            children: [
              {
                pic: "/Pork knuckle rice.png",
                title: "隆江猪脚饭",
                num: 0,
                price: 25.0,
                id: 0,
                add: true,
              },
              {
                pic: "/Pork knuckle rice.png",
                title: "隆江猪脚饭",
                num: 0,
                price: 25.0,
                id: 1,
                add: true,
              },
            ],
          },
          {
            text: "超级折扣",
            children: [
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "无骨酸菜鱼+肥牛双拼",
                num: 0,
                price: 25.0,
                id: 5,
                add: true,
              },
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "香辣水煮鱼+肥牛双拼",
                num: 0,
                price: 25.0,
                id: 6,
                add: true,
              },
            ],
          },
        ],
      },
    },
    {
      name: "评价",
      data: {
        content: "评价信息",
      },
    },
    {
      name: "商家",
      data: {
        content: "商家信息",
      },
    },
  ],
});

const handleAddCart = (type) => {
  const newList = store.state.cartList || [];

  storeDataRes.storeData.forEach((item) => {
    item.data.items?.forEach((item) => {
      item.children.forEach((item) => {
        if (item.num > 0) {
          newList.push(item);
        }
      });
    });
  });
  if (newList.length === 0) {
    showToast("请选择商品");
    return;
  }
  //进行深拷贝，让上传的购物车数据解绑
  store.commit("addCart", JSON.parse(JSON.stringify(newList)));
  //还原到初始状态
  newList.forEach((item) => {
    item.num = 0;
    item.add = true;
  });
  if (type == "buy") {
    router.push("./cart");
  }
};

const goCart = () => {
  router.push("/cart");
};

const goBuy = () => {
  handleAddCart("buy");
};
</script>

<style lang="less" scoped>
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url("/public/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodSort {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .sort {
        margin-top: 10px;
      }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
