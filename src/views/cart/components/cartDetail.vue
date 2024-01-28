<template>
  <div></div>
  <div class="cartDetail">
    <div class="list">
      <van-checkbox-group v-model="checked" @change="groupChange">
        <div
          v-for="item in store.state.cartList"
          :key="item.id"
          class="item-bg"
        >
          <ListItem :goodItem="item" :handleChange="handleChange" :min="1">
          </ListItem>
        </div>
      </van-checkbox-group>
    </div>
  </div>

  <van-submit-bar
    :price="allPrice"
    button-text="提交订单"
    @submit="onSubmit"
    class="submit-all"
    buttonColor="#ffc400"
    v-if="store.state.isDelete"
  >
    <van-checkbox v-model="allChecked" checkedColor="#ffc400" @click="chooseAll"
      >全选</van-checkbox
    >
  </van-submit-bar>

  <div class="edit" v-else>
    <div class="left">
      <van-checkbox
        v-model="allChecked"
        checkedColor="#ffc400"
        @click="chooseAll"
        >全选</van-checkbox
      >
    </div>
    <div class="delete" @click="handleDelete">删除</div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, onMounted, defineProps } from "vue";
import { computed } from "vue";
import ListItem from "../../../components/ListItem.vue";
import { showToast } from "vant";
import router from "../../../router/index";

let store = useStore();
let checked = ref([]); //一个数组，保存了所有被勾选项目的标识符（比如商品的 ID）
let allChecked = ref(true); //它的值决定了“全选”复选框是否被勾选
const props = defineProps(["changeShow"]);

function handleChange(value, detail) {
  store.state.cartList.map((item) => {
    if (item.name === detail.name) {
      item.num = value;
    }
  });
}

function handleDelete() {
  //部分删除,不把购物车所有商品删除
  if (checked.value.length) {
    store.commit("delete", updateData("delete"));
  } else {
    showToast("请选择要删除的商品");
  }
  //全部删除,购物车没有商品
  if (!store.state.cartList.length) {
    props.changeShow(); //调用父组件的方法
    store.commit("edit", updateData());
  }
}
function updateData(type) {
  return store.state.cartList.filter((item) => {
    return type === "delete"
      ? !checked.value.includes(item.id)
      : checked.value.includes(item.id);
  });
}
//groupChange函数的作用:让全选和手动选择同步
function groupChange(result) {
  if (result.length === store.state.cartList.length) {
    allChecked.value = true;
  } else {
    allChecked.value = false;
  }
}
//全选按钮
function chooseAll() {
  if (checked.value.length !== store.state.cartList.length) {
    init();
  } else {
    checked.value = [];
  }
}

const allPrice = computed(() => {
  let countList = store.state.cartList.filter((item) => {
    return checked.value.includes(item.id);
  });
  let sum = 0;
  countList.forEach((item) => {
    sum += item.num * item.price;
  });
  return sum * 100;
});

function onSubmit() {
  if (checked.value.length) {
    store.commit("pay", updateData());
    router.push({
      path: "/createOrder",
      query: {
        list: checked.value,
      },
    });
  } else {
    showToast("请选择你的商品");
  }
}

function init() {
  setCheckedAll();
}

//进入购物车时,购物车中所有商品被选中
function setCheckedAll() {
  checked.value = store.state.cartList.map((item) => item.id);
}

onMounted(() => {
  init();
});
</script>

<style lang="less" scoped>
.cartDetail {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;
}
.edit {
  position: fixed;
  bottom: 48px;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  height: 50px;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.left {
  display: flex;
  align-items: center;
}

.delete {
  color: #fff;
  background-color: #ffc400;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  width: 110px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.content {
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}

.submit-all {
  position: fixed;
  bottom: 48px;
}
</style>
