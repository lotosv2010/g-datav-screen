<template>
  <div class="home">
    <g-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </g-loading>
    <g-container v-else :options="{ height: 2160, width: 3840 }">
      <div class="header">
        <top-header />
      </div>
      <div class="separator">222</div>
      <div class="center">
        <div class="left">
          <div class="left1">333</div>
          <div class="left2">444</div>
          <div class="left3">555</div>
          <div class="left4">666</div>
          <div class="left5">777</div>
          <div class="left6">888</div>
        </div>
        <div class="right">
          <div class="right-top1">top1</div>
          <div class="right-top2">top2</div>
          <div class="right-bottom">
            <div class="right-bottom-left">
              <div class="right-bottom-left1">right-bottom-left1</div>
              <div class="right-bottom-left2">right-bottom-left2</div>
              <div class="right-bottom-left3">right-bottom-left3</div>
              <div class="right-bottom-left4">right-bottom-left4</div>
            </div>
            <div class="right-bottom-right">
              <div class="right-bottom-right1">right-bottom-right1</div>
              <div class="right-bottom-right2">right-bottom-right2</div>
            </div>
          </div>
        </div>
      </div>
    </g-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from "vue";
import TopHeader from "../components/TopHeader/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopHeader,
  },
  setup() {
    const loading: Ref<boolean> = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    });
    return {
      loading,
    };
  },
});
</script>
<style lang="scss" scope>
.home {
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgb(29, 29, 29);
  font-size: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .g-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .header {
      width: 100%;
      height: 167px;
    }
    .separator {
      width: 100%;
      height: 10px;
      background: peachpuff;
    }
    .center {
      width: 100%;
      flex: 1;
      display: flex;
      background: darkcyan;
      .left {
        flex: 0 0 860px;
        background: coral;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 20px;
        box-sizing: border-box;
        width: 860px;
        height: 100%;
        .left1 {
          height: 300px;
          background: wheat;
        }
        .left2 {
          height: 320px;
          background: rebeccapurple;
        }
        .left3 {
          height: 280px;
          background: thistle;
        }
        .left4 {
          height: 230px;
          background: yellow;
        }
        .left5 {
          height: 360px;
          background: indianred;
        }
        .left6 {
          height: 360px;
          background: olive;
        }
      }
      .right {
        flex: 1;
        background: hotpink;
        display: flex;
        flex-direction: column;
        .right-top1 {
          width: 100%;
          height: 206px;
          background: paleturquoise;
        }
        .right-top2 {
          width: 100%;
          height: 48px;
          background: palegreen;
        }
        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;
          .right-bottom-left {
            width: 1917px;
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: peachpuff;
            .right-bottom-left1 {
              background: firebrick;
              height: 999px;
            }
            .right-bottom-left2 {
              background: lightgreen;
              height: 80px;
            }
            .right-bottom-left3 {
              background: lightblue;
              height: 350px;
            }
            .right-bottom-left4 {
              background: blueviolet;
              height: 220px;
            }
          }
          .right-bottom-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            .right-bottom-right1 {
              background: cadetblue;
              width: 100%;
              height: 999px;
            }
            .right-bottom-right2 {
              background: violet;
              width: 100%;
              flex: 1;
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
  .g-loading {
    .loading-text {
      font-size: 20px;
      margin-top: 15px;
    }
  }
}
</style>
