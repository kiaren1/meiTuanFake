<template>
  <shoppingHeader :title="headTitle"></shoppingHeader>
  <van-address-edit
    :area-list="areaList"
    show-delete
    show-set-default
    show-search-result
    :address-info="addressInfo"
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
  />
</template>

<script setup>
import shoppingHeader from "../../components/shoppingHeader";
import { ref, reactive, onMounted } from "vue";
import { showToast } from "vant";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const store = useStore();
const searchResult = ref([]);
const route = useRoute();
const router = useRouter();

const addressInfo = ref([]);
const areaList = reactive({
  province_list: {
    110000: "广东省",
    120000: "浙江省",
  },
  city_list: {
    110100: "广州市",
    110200: "深圳市",
    120100: "杭州市",
    120200: "宁波市",
  },
  county_list: {
    110101: "天河区",
    110102: "海珠区",
    120102: "上城区",
    130102: "下城区",
  },
});

onMounted(() => {
  init();
});

//进入编辑地址页面时,编辑地址的内容初始化为被修改的地址内容
function init() {
  store.state.userAddress.forEach((item) => {
    if (item.id === Number(route.query.id)) {
      addressInfo.value = item;
    }
  });
}

//保存操作
function onSave(content) {
  if (route.query.type === "add") {
    store.commit("addAddress", content);
  } else {
    store.commit("editAddress", content);
  }
  showToast("保存成功");
  setTimeout(() => {
    router.back();
  }, 800);
}

function onDelete(content) {
  store.commit("deleteAddress", content);
  showToast("删除成功");
  setTimeout(() => {
    router.back();
  }, 800);
}

//计算标题内容
const headTitle = computed(() => {
  return route.query.type === "add" ? "新增地址" : "地址编辑";
});
</script>
