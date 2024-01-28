<template>
  <div class="food-list">
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="88vw"
      :items="props.foodData.items"
    >
      <template #content>
        <div v-for="item in goodsList" :key="item.id" class="item-bg">
          <FoodListItem
            :goodItem="item"
            @itemAdd="handleAdd"
            @itemValChange="handleChange"
            :min="0"
          >
          </FoodListItem>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { onMounted } from "vue";
import { defineProps } from "vue";
import FoodListItem from "./FoodListItem.vue";

onMounted(() => {
  // initData();
  console.log(props.foodData.items);
});
// 定义接收的 prop
const props = defineProps(["foodData"]);

// 选中的侧边父类
const activeIndex = ref(0);
// 商品数据列表
const goodsList = ref();

watch(
  activeIndex,
  (index) => {
    const selectedItem = props.foodData.items[index];
    goodsList.value = selectedItem.children;
  },
  { immediate: true }
);

function handleAdd(id) {
  goodsList.value.forEach((item) => {
    if (item.id === id) {
      item.add = false;
      item.num++;
    }
  });
}

function handleChange() {
  goodsList.value.forEach((item) => {
    if (item.num != 0) {
      item.add = false;
    } else if (item.num == 0) {
      item.add = true;
    }
  });
}
</script>

<style lang="less" scoped>
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
}
/deep/ .van-tree-select__item--active {
  color: #ffc400;
}
/deep/ .van-sidebar-item--select::before {
  background-color: #ffc400;
}
</style>
