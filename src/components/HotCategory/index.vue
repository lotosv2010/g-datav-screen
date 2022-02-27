<template>
  <div class="hot-category">
    <div class="hot-category-wrapper">
      <div class="hot-category-left">
        <div class="title">当前热卖品类</div>
        <div class="sub-title">Hot Categories</div>
      </div>
      <div class="hot-category-right">
        <div class="sub-title">最后更新时间：{{ date }}</div>
      </div>
    </div>
    <div id="hot-category-chart">
      <g-vue-echarts :options="options" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch, onMounted, onUnmounted } from "vue";
import useClock from "../../hooks/useClock";

export default defineComponent({
  name: "HotCategory",
  props: {
    data: Object,
  },
  setup(ctx) {
    const options = ref(null);
    let task;
    let currentChart = 0;
    const update = () => {
      const sourceData = [];
      const { data1, data2 } = ctx.data;
      if (currentChart === 0) {
        data1.axisX.forEach((axis, index) => {
          sourceData.push([axis, data1.data1[index], data1.data2[index]]);
        });
      } else {
        data2.axisX.forEach((axis, index) => {
          sourceData.push([axis, data2.data1[index], data2.data2[index]]);
        });
      }
      const source = [["指标", "国内", "海外"], ...sourceData];
      options.value = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: ["rgb(209,248,138)", "rgba(65,65,65,.5)"],
        grid: {
          left: 20,
          right: 0,
          bottom: 30,
          top: 20,
        },
        dataset: {
          source,
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dotted",
            },
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "rgb(124,136,146)",
            },
          },
          axisLabel: {
            color: "rgb(98,105,113)",
            fontSize: 16,
          },
          axisTick: { show: false },
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "rgb(98,105,113)",
            fontSize: 16,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "rgb(124,136,146)",
            },
          },
        },
        series: [
          {
            type: "bar",
            stack: "total",
            barWidth: 40,
          },
          {
            type: "bar",
            stack: "total",
          },
        ],
      };
      currentChart === 0 ? (currentChart = 1) : (currentChart = 0);
    };
    const stop = watch(
      () => ctx.data,
      () => {
        task = setInterval(() => {
          update();
        }, 5000);
        stop();
      }
    );
    onMounted(() => {
      update();
    });
    onUnmounted(() => task && clearInterval(task));
    return {
      options,
      ...useClock(),
    };
  },
});
</script>

<style lang="scss" scoped>
.hot-category {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);
  padding: 20px 40px;
  box-sizing: border-box;
  &-wrapper {
    display: flex;
    .hot-category-left {
      .title {
        font-size: 32px;
      }
    }
    .hot-category-right {
      flex: 1;
      text-align: right;
    }
    .sub-title {
      font-size: 16px;
      margin-top: 10px;
    }
  }
  #hot-category-chart {
    height: 220px;
  }
}
</style>
