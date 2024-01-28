<template>
  <div class="empty-content">
    <img src="/空空如也.png" />
    啥都没有
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.empty-content {
  flex: 1;
  margin: 20px;
  font-size: 16px;
  overflow-y: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
  .icon {
    margin-bottom: 10px;
  }
  .src {
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
