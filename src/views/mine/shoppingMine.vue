<template>
  <div class="me">
    <shoppingHeader title="我的"></shoppingHeader>
    <div class="content">
      <div class="user-info">
        <div class="info">
          <img src="/header.png" />
          <div class="user-desc">
            <span class="name">昵称：{{ name }}</span>
            <span class="describe">个性签名：{{ describe }}</span>
          </div>
        </div>
      </div>
      <ul class="user-list">
        <li class="van-hairline--bottom" @click="go('/order')">
          <span>我的订单</span>
          <van-icon name="arrow" />
        </li>
        <li class="van-hairline--bottom" @click="go('/shoppingAddress')">
          <span>地址管理</span>
          <van-icon name="arrow" />
        </li>
        <li class="van-hairline--bottom" @click="go('/userInfo')">
          <span>账号管理</span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
    <shoppingFooter></shoppingFooter>
  </div>
</template>

<script setup>
import shoppingFooter from "../../components/shoppingFooter";
import shoppingHeader from "../../components/shoppingHeader.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

let name = ref("咔咔");
let describe = ref("问渠哪得清如许，为有源头活水来");
let router = useRouter();

function go(path) {
  router.push(path);
}
</script>

<style lang="less" scoped>
.me {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .user-info {
      width: 94%;
      margin: 10px;
      height: 145px;
      background: linear-gradient(90deg, #ffc400, #c7c351);
      box-shadow: 0 2px 5px #ffc400;
      border-radius: 6px;
      .info {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 25px 20px;
        box-sizing: border-box;
        img {
          border-radius: 50%;
          margin-top: 4px;
        }
        .user-desc {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          line-height: 20px;
          font-size: 18px;
          color: #fff;
          justify-content: space-between;
          span {
            color: #fff;
            padding: 2px 0;
          }
        }
        .account-setting {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 13px;
          color: #fff;
          .van-icon-setting-o {
            font-size: 16px;
            vertical-align: -3px;
            margin-right: 4px;
          }
        }
      }
    }
    .user-list {
      padding: 0 20px;
      margin-top: 20px;
      background-color: #fff;
      li {
        height: 50px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 20x;
        .van-icon-arrow {
          margin-top: 13px;
        }
      }
    }
  }
}
.name {
  font-size: 20px;
  font-weight: 600;
}
.describe {
  font-size: 15px;
}
</style>
