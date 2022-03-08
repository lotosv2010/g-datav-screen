<template>
  <div class="home">
    <g-loading v-if="loading">
      <div class="loading-text">华为手机销售数据大屏加载中...</div>
    </g-loading>
    <g-container v-else :options="{ height: 2160, width: 3840 }">
      <div class="header">
        <top-header />
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :todayUser="todayUser"
              :growthLastDay="growthLastDay"
              :growthLastMonth="growthLastMonth"
            />
          </div>
          <div class="left2">
            <average-age :data="ageData" :avgAge="averageAge" />
          </div>
          <div class="left3">
            <total-device :data="deviceData" />
          </div>
          <div class="left4">
            <total-gender :data="genderData" />
          </div>
          <div class="left5">
            <total-shop :data="onLineData" />
          </div>
          <div class="left6">
            <hot-category :data="hotCategoryData" />
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData" />
          </div>
          <div class="right-top2">
            <transform-category
              :data="['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉']"
            />
          </div>
          <div class="right-bottom">
            <div class="right-bottom-left">
              <div class="right-bottom-left1">
                <order-map :data="mapData" />
              </div>
              <div class="right-bottom-left2">
                <transform-category
                  :data="['订单量', '销售额', '用户数', '退单量']"
                  :color="['rgb(178, 209, 126)', 'rgb(116, 166 ,49)']"
                />
              </div>
              <div class="right-bottom-left3">
                <real-time-order :data="realTimeOrder" />
              </div>
              <div class="right-bottom-left4">
                <schedule-view :data="scheduleView" />
              </div>
            </div>
            <div class="right-bottom-right">
              <div class="right-bottom-right1">
                <sales-list :data="salesListData" />
              </div>
              <div class="right-bottom-right2">
                <sales-rank :data="salesRank" />
              </div>
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
import TotalUser from "../components/TotalUser/index.vue";
import AverageAge from "../components/AverageAge/index.vue";
import TotalDevice from "../components/TotalDevice/index.vue";
import TotalGender from "../components/TotalGender/index.vue";
import TotalShop from "../components/TotalShop/index.vue";
import HotCategory from "../components/HotCategory/index.vue";
import CenterHeader from "../components/CenterHeader/index.vue";
import TransformCategory from "../components/TransformCategory/index.vue";
import SalesList from "../components/SalesList/index.vue";
import OrderMap from "../components/OrderMap/index.vue";
import RealTimeOrder from "../components/RealTimeOrder/index.vue";
import ScheduleView from "../components/ScheduleView/index.vue";
import SalesRank from "../components/SalesRank/index.vue";
import useScreenData from "../hooks/useScreenData";
import useMap from "../hooks/useMap";

export default defineComponent({
  name: "Home",
  components: {
    TopHeader,
    TotalUser,
    AverageAge,
    TotalDevice,
    TotalGender,
    TotalShop,
    HotCategory,
    CenterHeader,
    TransformCategory,
    SalesList,
    OrderMap,
    RealTimeOrder,
    ScheduleView,
    SalesRank,
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
      ...useScreenData(),
      mapData: useMap(),
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
      background: rgb(92, 88, 89);
    }
    .center {
      width: 100%;
      flex: 1;
      display: flex;
      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 20px;
        box-sizing: border-box;
        width: 860px;
        height: 100%;
        .left1 {
          height: 300px;
        }
        .left2 {
          height: 320px;
        }
        .left3 {
          height: 280px;
        }
        .left4 {
          height: 230px;
        }
        .left5 {
          height: 360px;
        }
        .left6 {
          height: 360px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .right-top1 {
          width: 100%;
          height: 206px;
        }
        .right-top2 {
          width: 100%;
          height: 48px;
          margin: 10px 0;
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
            .right-bottom-left1 {
              height: 999px;
            }
            .right-bottom-left2 {
              height: 80px;
            }
            .right-bottom-left3 {
              height: 350px;
            }
            .right-bottom-left4 {
              height: 220px;
            }
          }
          .right-bottom-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            margin-right: 10px;
            .right-bottom-right1 {
              width: 100%;
              height: 999px;
            }
            .right-bottom-right2 {
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
