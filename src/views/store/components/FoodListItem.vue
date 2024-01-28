<template>
  <div class="content-item">
    <div class="price"></div>
    <div class="left">
      <img :src="props.goodItem.pic" />
      <div class="text">
        {{ props.goodItem.title }}
        <van-icon name="add-o" v-if="goodItem.add" @click="add" />
        <van-stepper
          v-model="item.num"
          :min="min"
          v-if="!goodItem.add"
          @change="valueChange"
        />
      </div>
    </div>
    <div class="price">￥{{ props.goodItem.price }}</div>
  </div>
</template>

<style lang="less" scoped>
.content-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .price {
    font-size: 16px;
    font-weight: 600;
  }
  .left {
    display: flex;
    align-items: center;
    flex: 1;
    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;
      .title {
        font-size: 16px;
      }
      /deep/ .van-icon {
        color: red;
        font-size: 20px;
        position: absolute;
        right: 4px;
        bottom: 4px;
      }
    }
  }
}
</style>

<script setup>
// import { ref } from "vue";
import { defineProps } from "vue";
import { defineEmits } from "vue";
import { computed } from "vue";

const props = defineProps(["goodItem", "min"]);
const emit = defineEmits(["itemAdd", "itemValChange"]);

//使用计算属性来保持响应性
let item = computed(() => props.goodItem);

function add() {
  emit("itemAdd", item.value.id);
}
function valueChange(value, detail) {
  emit("itemValChange", value, detail);
}
</script>
