<template>
  <div class="login">
    <shoppingHeader title="注册"></shoppingHeader>
    <div class="img">米团</div>
    <van-form @submit="onSubmit" class="inPut">
      <van-field
        v-model="username"
        name="user"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="pass"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
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
          @click="toRegister"
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
import { ref } from "vue";
import { showToast } from "vant";

let username = ref("");
let password = ref("");
let router = useRouter();

function toRegister() {
  router.push("/registerPage");
}
function onSubmit() {
  let response = login_local();
  checkResponse(response);
}
function login_local() {
  let userNameStr = username.value;
  let passWordStr = password.value;
  let pass = localStorage.getItem(userNameStr);
  if (pass) {
    if (passWordStr === pass) {
      return { state: 200 };
    }
  } else return { state: -1 };
}
function checkResponse(response) {
  if (response.state === 200) {
    localStorage.setItem("isLogin", "login");
    localStorage.setItem("username", username.value);
    showToast("登录成功");
    router.push("/home");
  } else {
    showToast("账号或密码错误");
  }
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
