<template>
  <shoppingHeader title="我的信息"></shoppingHeader>
  <div>
    <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
    <van-field
      v-model="sign"
      label="个性签名"
      placeholder="个性签名"
      disabled
    />
    <van-field v-model="pass" label="密码" placeholder="请输入密码" />
  </div>

  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="save"
    >保存</van-button
  >

  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="logOut"
    >退出登录</van-button
  >
</template>

<script setup>
import shoppingHeader from "../../components/shoppingHeader";
import { ref } from "vue";
import { showToast } from "vant";
import { useRouter } from "vue-router";

const name = ref("");
const sign = ref("");
const pass = ref("");

const router = useRouter();

function save() {
  if (name.value && pass.value) {
    // 检查 localStorage 中是否有 userInfo
    let userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    let newUserInfo = {
      user: name.value || userInfo.user,
      pass: pass.value || userInfo.pass,
    };
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
    showToast("修改成功");
    router.back();
  } else {
    showToast("用户名和密码不能为空");
  }
}
function logOut() {
  localStorage.removeItem("isLogin");
  router.push("/logIn");
  showToast("退出成功");
}
</script>

<style lang="less" scoped>
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>
