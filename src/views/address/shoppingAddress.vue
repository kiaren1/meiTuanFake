<template>
  <shoppingHeader title="地址管理"></shoppingHeader>
  <van-address-list
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
  />
</template>
<script setup>
import { ref, onMounted } from "vue";
import shoppingHeader from "../../components/shoppingHeader";
import { useStore } from "vuex";
import router from "../../router/index.js";

const store = useStore();
const list = ref([]);

onMounted(() => {
  init();
});
function onAdd() {
  router.push({
    path: "/addressEdit",
    query: {
      type: "add",
    },
  });
}
function onEdit(item) {
  router.push({
    path: "/addressEdit",
    query: {
      id: item.id,
      type: "edit",
    },
  });
}
function init() {
  list.value = store.state.userAddress.map((item) => {
    return {
      id: item.id,
      name: item.name,
      tel: item.tel,
      address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
      isDefault: item.isDefault,
    };
  });
}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #fdc010;
  border-color: #fdc010;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
/deep/ .van-radio__icon {
  display: none;
}
</style>
