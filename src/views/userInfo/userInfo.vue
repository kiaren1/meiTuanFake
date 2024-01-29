<template>
  <shoppingHeader title="我的信息"></shoppingHeader>
  <div>
    <van-field v-model="userName" label="用户名" disabled />
    <van-field
      v-model="userInfo.nickName"
      label="昵称"
      placeholder="请输入昵称"
    />
    <van-field
      v-model="userInfo.sign"
      label="个性签名"
      placeholder="个性签名"
    />
    <van-field
      v-model="passOne"
      label="修改密码"
      type="password"
      placeholder="请输入新密码"
    />
    <van-field
      v-model="passTwo"
      label="确认修改密码"
      type="password"
      placeholder="请确认新密码"
    />
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
import { ref, reactive, onMounted } from "vue";
import { showToast } from "vant";
import { useRouter } from "vue-router";

let userName = ref(localStorage.getItem("onlineUser"));
// const nickName = ref("");
// const sign = ref("");
const passOne = ref("");
const passTwo = ref("");
const router = useRouter();

let userInfo = reactive({
  nickName: "",
  sign: "",
});

onMounted(() => {
  init();
});

function save(value) {
  if (userInfo.nickName) {
    if (passOne.value && passTwo.value) {
      let judgmentResult = judgment(value);
      if (judgmentResult === 0) {
        showToast("两次密码不一致,重新输入");
        return;
      }
      if (judgmentResult === 1) {
        localStorage.setItem(userName.value, passOne.value);
        console.log("密码修改成功");
      }
    }
    let userInfoJson = JSON.stringify(userInfo);
    localStorage.setItem(`${userName.value}Info`, userInfoJson);
    showToast("修改成功");
    router.back();
  } else {
    showToast("昵称不能为空");
  }
}

//判断两次密码是否一样
function judgment(value) {
  if (value.passwordOne === value.passwordTwo) {
    return 1;
  } else {
    return 0;
  }
}

function logOut() {
  localStorage.removeItem("isLogin");
  router.push("/logIn");
  showToast("退出成功");
}

function init() {
  let userName = localStorage.getItem("onlineUser");
  // console.log("Info页面中userName");
  // console.log(userName);
  let userInfoJson = localStorage.getItem(`${userName}Info`);
  // console.log("Info页面中userInfoJson");
  // console.log(userInfoJson);

  if (userInfoJson) {
    let userInfo_new = JSON.parse(userInfoJson);
    if (userInfo_new) {
      userInfo.nickName = userInfo_new.nickName;
      userInfo.sign = userInfo_new.sign;
    }
  } else {
    // 处理 userInfoJson 为 null 的情况
    console.log("未找到用户信息");
  }
}
</script>

<style lang="less" scoped>
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>
