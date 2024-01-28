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
const username = ref("");
const password = ref("");
function toLogIn() {
  router.push("/LogIn");
}

//注册请求处理
function onSubmit() {
  let userNameStr = username.value;
  let passWordStr = password.value;
  alert("进入注册");
  if (localStorage.getItem(userNameStr)) {
    showToast("用户名已存在");
    return { state: -1, errMsg: "该用户名已经存在" };
  } else {
    localStorage.setItem(userNameStr, passWordStr);
    showToast("注册成功,来登录叭");
  }
}

// //注册实现
// function register(value) {
//   alert("进入注册register函数");
//   localStorage.setItem("userInfo", JSON.stringify(value));
//   showToast("注册成功");
//   router.push("/logIn");
// }
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
