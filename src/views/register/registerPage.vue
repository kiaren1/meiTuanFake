<template>
  <div class="login">
    <shoppingHeader title="注册"></shoppingHeader>
    <div class="img">米团</div>
    <van-form @submit="onSubmit" class="inPut">
      <van-field
        v-model="nickName"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请设置昵称' }]"
      />

      <van-field
        v-model="userName"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请设置用户名' }]"
      />

      <van-field
        v-model="passwordOne"
        type="password"
        name="passOne"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请设置密码' }]"
      />

      <van-field
        v-model="passwordTwo"
        type="password"
        name="passTwo"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <div>
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#ffc400"
          class="button"
        >
          注册
        </van-button>

        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="button"
          @click="toLogIn"
        >
          去登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import shoppingHeader from "../../components/shoppingHeader";
import { useRouter } from "vue-router";
import { showToast } from "vant";
import { ref } from "vue";
let router = useRouter();

let nickName = ref("");
let userName = ref("");
let passwordOne = ref("");
let passwordTwo = ref("");

function toLogIn() {
  router.push("/LogIn");
}

//注册请求的判断处理
function onSubmit(value) {
  let judgmentResult = judgment(value);
  if (judgmentResult === 0) {
    showToast("两次密码不一致,重新输入");
    return;
  }
  // console.log(JSON.stringify(value));
  // console.log(value);
  let enteredUserName = userName.value;
  if (localStorage.getItem(enteredUserName)) {
    showToast("ID已存在,请重新设置");
  } else {
    register();
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

//注册操作
function register() {
  initUserInfo(userName.value);
  localStorage.setItem(userName.value, passwordOne.value);
  showToast("注册成功,自动跳转登录页面");
  router.push("/login");
}

function initUserInfo(username) {
  let userInfo = {
    nickName: nickName.value,
    sign: "问渠哪得清如许，为有源头活水来",
  };
  let userInfoJson = JSON.stringify(userInfo);
  //存储用户信息
  localStorage.setItem(`${username}Info`, userInfoJson);
}
</script>

<style scoped lang="less">
.login {
  .img {
    width: 180px;
    height: 180px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .button {
    width: 80%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .input {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
