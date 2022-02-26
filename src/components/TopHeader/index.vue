<template>
  <div class="top-header">
    <!-- <img src="https://cn.vuejs.org/images/logo.svg" alt="LOG" class="logo" /> -->
    <div class="logo-wrapper">
      <g-logo stroke="red" stroke-width="20" />
    </div>
    <div class="logo-text">
      <div class="cn-text">销售订单数据大盘</div>
      <div class="en-text">Sales Order Overview of Business Data</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TopHeader",
};
</script>

<style lang="scss" scoped>
.top-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(36, 31, 32);
  padding: 0 64px;
  box-sizing: border-box;
  .logo-wrapper {
    width: 120px;
    height: 120px;
  }
  .logo-text {
    flex: 1;
    margin-left: 40px;
    color: #fff;
    .cn-text {
      font-weight: bold;
      font-size: 60px;
      letter-spacing: 2px;
    }
    .en-text {
      font-size: 35px;
      letter-spacing: 1px;
    }
  }
}
</style>
