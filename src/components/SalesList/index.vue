<template>
  <div class="scroll-lists">
    <g-base-scroll-list :config="config" />
  </div>
</template>

<script>
import { ref, defineComponent, onMounted, watch } from "vue";
export default defineComponent({
  name: "SalesList",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(ctx) {
    const config = ref({});
    const update = () => {
      const data1 = [];
      for (let i = 0; i < 10; i++) {
        data1.push([
          `Test-${i + 1}`,
          Math.floor(Math.random() * 10 + 20),
          Math.floor(Math.random() * 10000),
        ]);
      }
      const data = [];
      const headerIndexData = [];
      for (let i = 0; i < ctx.data.length; i++) {
        data[i] = [];
        if (i % 2 === 0) {
          headerIndexData[
            i
          ] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background: rgb(40,40,40);">
            <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
          </div>`;
        } else {
          headerIndexData[
            i
          ] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background: rgb(40,40,40);">
            <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
          </div>`;
        }
        for (let j = 0; j < 5; j++) {
          let text = "";
          switch (j) {
            case 0:
              text = ctx.data[i].order;
              break;
            case 1:
              text = ctx.data[i].shop;
              break;
            case 2:
              text = ctx.data[i].rider;
              break;
            case 3:
              text = ctx.data[i].newShop;
              break;
            case 4:
              text = ctx.data[i].avgOrder;
              break;
            default:
          }
          if (j === 1 || j === 3) {
            data[i].push(`<div style="color:rgb(178,209,126)">${text}</div>`);
          } else {
            data[i].push(`<div>${text}</div>`);
          }
        }
      }
      config.value = {
        header: ["城市订单量", "店铺数", "人数", "新店铺数了", "人均订单量"],
        headerHeight: 55,
        headerFontSize: 24,
        headerColor: "#fff",
        headerBg: "rgb(80, 80, 80)",
        headerIndexContent: "",
        headerIndexData,
        headerIndex: true,
        rowNum: 12,
        rowFontSize: 24,
        rowColor: "#fff",
        // aligns: ["center", "center", "center"],
        data: data, // ctx.data,
      };
    };
    onMounted(() => {
      update();
    });
    const stop = watch(
      () => ctx.data,
      () => {
        update();
        stop();
      }
    );
    return {
      config,
    };
  },
});
</script>

<style lang="scss" scoped>
.scroll-lists {
  height: 100%;
  width: 100%;
}
</style>
