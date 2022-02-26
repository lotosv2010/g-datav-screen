<template>
  <div class="total-user">
    <div class="title">用户总数</div>
    <div class="sub-title">User Total Count</div>
    <div class="total">
      <g-count-to
        :startVal="startVal"
        :endVal="todayUser"
        :duration="1000"
        separator=","
      />
    </div>
    <div class="percent-text">
      <span class="percent-text-day">
        每日增长率:
        <g-count-to
          :startVal="startPercentDay"
          :endVal="growthLastDay"
          :duration="1000"
          decimals="2"
          suffix="%"
        />
      </span>
      <span class="percent-text-month"
        >每月增长率:
        <g-count-to
          :startVal="startPercentMonth"
          :endVal="growthLastMonth"
          :duration="1000"
          decimals="2"
          suffix="%"
        />
      </span>
    </div>
    <div class="percent">
      <div class="percent-inner-wrapper">
        <div class="percent-inner" :style="{ width: `${growthLastDay}%` }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "UserTotal",
  props: {
    todayUser: {
      type: Number,
      default: 0,
    },
    growthLastDay: {
      type: Number,
      default: 0,
    },
    growthLastMonth: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const startVal = ref(0);
    const startPercentDay = ref(0);
    const startPercentMonth = ref(0);
    watch(
      () => props.todayUser,
      (nextValue, preValue) => {
        startVal.value = preValue;
      }
    );
    watch(
      () => props.growthLastDay,
      (nextValue, preValue) => {
        startPercentDay.value = preValue;
      }
    );
    watch(
      () => props.growthLastMonth,
      (nextValue, preValue) => {
        startPercentMonth.value = preValue;
      }
    );
    return {
      startVal,
      startPercentDay,
      startPercentMonth,
    };
  },
});
</script>

<style lang="scss" scoped>
.total-user {
  width: 100%;
  height: 100%;
  background: rgb(66, 68, 70);
  box-sizing: border-box;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  padding: 20px 40px;
  .title {
    font-size: 32px;
  }
  .sub-title {
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 10px;
  }
  .total {
    font-family: DIN;
    font-size: 68px;
    font-weight: bolder;
    letter-spacing: 2px;
    padding: 10px 0;
  }
  .percent-text {
    font-size: 28px;
    font-family: DIN;
    letter-spacing: 1px;
    &-day {
      color: rgb(197, 251, 121);
    }
    &-month {
      color: rgb(99, 169, 0);
      margin-left: 10px;
    }
  }
  .percent {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    margin-top: 10px;
    .percent-inner-wrapper {
      height: 100%;
      padding: 2px;
      box-sizing: border-box;
      overflow: hidden;
      .percent-inner {
        height: 100%;
        background: rgb(150, 150, 150);
        transition: all 1s linear;
      }
    }
  }
}
</style>
