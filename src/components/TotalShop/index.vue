<template>
  <div class="line-chart">
    <div class="title-wrapper">
      <div class="title">华为手机店铺概况</div>
      <div class="sub-title">Shop Growth rate</div>
    </div>
    <div id="total-shop-chart">
      <g-vue-echarts :options="options" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "TotalShop",
  props: {
    data: Object,
  },
  setup(ctx) {
    const options = ref(null);
    let task;
    let currentChart = 0;
    const colors = ["rgb(209,248,139)", "rgb(115,201,245)", "rgb(124,136,146)"];
    const update = () => {
      const { axisX, orderData, rateData } = ctx.data;
      const axisData = axisX;
      let legendData = [];
      let data1 = [];
      let data2 = [];
      if (currentChart === 0) {
        legendData = [orderData.legend1, orderData.legend2];
        data1 = orderData.data1;
        data2 = orderData.data2;
      } else {
        legendData = [rateData.legend1, rateData.legend2];
        data1 = rateData.data1;
        data2 = rateData.data2;
      }
      options.value = {
        color: colors,
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          top: 20,
          right: 40,
          icon: "rect",
          textStyle: {
            fontSize: 16,
            color: colors[2],
          },
          data: legendData,
        },
        grid: {
          top: 60,
          bottom: 30,
          left: 80,
          right: 40,
        },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[2],
              },
            },
            axisLabel: {
              fontSize: 16,
            },
            data: axisData,
          },
          {
            type: "category",
            show: false,
            axisTick: { show: false },
            axisLine: { show: false },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[2],
              },
            },
            axisLabel: {
              fontSize: 16,
            },
            splitLine: {
              lineStyle: {
                type: "dotted",
              },
            },
          },
        ],
        series: [
          {
            name: legendData[0],
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            lineStyle: {
              width: 2,
            },
            symbol: "none",
            data: data1,
          },
          {
            name: legendData[1],
            type: "line",
            smooth: true,
            lineStyle: {
              width: 2,
            },
            symbol: "none",
            data: data2,
          },
        ],
      };
      if (currentChart === 0) {
        currentChart = 1;
      } else {
        currentChart = 0;
      }
    };
    const stop = watch(
      () => ctx.data,
      () => {
        update();
        task = setInterval(() => {
          update();
        }, 5000);
        stop(); // 只监听一次，解决和 setInterval 矛盾的问题，造成多次渲染的问题
      }
    );
    onMounted(() => {
      update();
    });
    onUnmounted(() => task && clearInterval(task));
    return {
      options,
    };
  },
});
</script>

<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);

  .title-wrapper {
    padding: 20px 40px 0;
    box-sizing: border-box;

    .title {
      font-size: 32px;
    }

    .sub-title {
      font-size: 16px;
      margin-top: 10px;
    }
  }

  #total-shop-chart {
    width: 100%;
    height: 250px;
  }
}
</style>
