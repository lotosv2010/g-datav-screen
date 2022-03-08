import { ref, onMounted, onUnmounted } from "vue";

// 生产随机数
const random = (basic: number) => Math.floor(Math.random() * basic);

export default function (): Record<string, unknown> {
  // 用户总数
  const todayUser = ref(10000);
  const growthLastDay = ref(10.34);
  const growthLastMonth = ref(15.45);

  // 平均年龄
  const ageMockData = [
    { startValue: 0, value: 131107, axis: "0-20", color: "rgb(116,166,49)" },
    { startValue: 0, value: 330831, axis: "20-30", color: "rgb(190,245,99)" },
    { startValue: 0, value: 551238, axis: "30-50", color: "rgb(202,252,137)" },
    { startValue: 0, value: 31088, axis: ">50", color: "rgb(251,253,142)" },
  ];
  const averageAge = ref(0);
  const ageData = ref(ageMockData);

  // 设备统计
  const deviceMockData = {
    totalDevices: 1070909,
    devices: [
      { key: "Android", value: 423676 },
      { key: "iOS", value: 373581 },
      { key: "PC", value: 273652 },
    ],
  };
  const deviceData = ref(deviceMockData);

  // 性别统计
  const genderMockData = [
    { key: "male", value: 1442542 },
    { key: "female", value: 1442548 },
  ];
  const genderData = ref(genderMockData);

  // 店铺统计
  const onLineMockData = {
    axisX: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    orderData: {
      legend1: "去年线上月均接单",
      legend2: "今年实体店月均接单",
      data1: [
        "330",
        "420",
        "560",
        "450",
        "610",
        "890",
        "720",
        "610",
        "580",
        "750",
        "770",
        "600",
      ],
      data2: [
        "430",
        "510",
        "660",
        "550",
        "710",
        "990",
        "620",
        "550",
        "760",
        "810",
        "930",
        "720",
      ],
    },
    rateData: {
      legend1: "去年月新增线上店",
      legend2: "今年月新增实体店",
      data1: [
        "129",
        "223",
        "202",
        "197",
        "300",
        "112",
        "333",
        "249",
        "178",
        "322",
        "401",
        "167",
      ],
      data2: [
        "179",
        "263",
        "282",
        "297",
        "330",
        "344",
        "222",
        "299",
        "190",
        "455",
        "566",
        "233",
      ],
    },
  };
  const onLineData = ref(onLineMockData);

  // 热门分类
  const hotCategoryMockData = {
    data1: {
      axisX: [
        "P 系列",
        "Mate 系列",
        "Nova 系列",
        "畅想系列",
        "荣耀 X",
        "荣耀 Play",
        "荣耀 Magic",
      ],
      data1: [50, 29, 46, 88, 99, 69, 97],
      data2: [50, 71, 54, 12, 1, 31, 3],
    },
    data2: {
      axisX: [
        "P50",
        "P50 Pro",
        "Mate40",
        "Mate40 Pro",
        "Mate X2",
        "Nova 9",
        "Nova9 Pro",
      ],
      data1: [85, 4, 3, 26, 63, 31, 19],
      data2: [15, 96, 97, 74, 37, 69, 81],
    },
  };
  const hotCategoryData = ref(hotCategoryMockData);

  // 顶部
  const headerMockData = {
    headerData: [
      {
        title: "今日销售额",
        subTitle: "Today's Sales Amount",
        startVal: 40041113,
        endVal: 40105335,
        img: "money",
      },
      {
        title: "今日订单量",
        subTitle: "Today's Total Orders",
        startVal: 2566778,
        endVal: 2570025,
        img: "order",
      },
      {
        title: "今日交易用户数",
        subTitle: "Today's Payed Users",
        startVal: 271744,
        endVal: 272200,
        img: "member",
      },
      {
        title: "今日新增用户数",
        subTitle: "Today's New Users",
        startVal: 1286552,
        endVal: 1289057,
        img: "follow",
      },
    ],
    project: [
      {
        title: "转化率",
        value: "13.16%",
        img: "success",
      },
      {
        title: "退单率",
        value: "5.73%",
        img: "failed",
      },
    ],
  };
  const headerData = ref(headerMockData);

  // 销售列表
  const salesListMockData = [
    {
      order: "北京 -10%",
      shop: "北京 -19%",
      rider: "北京 -12%",
      newShop: "北京 -17%",
      avgOrder: "北京 -8%",
    },
    {
      order: "上海 +19%",
      shop: "上海 -7%",
      rider: "上海 +6%",
      newShop: "上海 +7%",
      avgOrder: "上海 +21%",
    },
    {
      order: "广州 -6%",
      shop: "广州 -5%",
      rider: "广州 +23%",
      newShop: "广州 -22%",
      avgOrder: "广州 +12%",
    },
    {
      order: "深圳 -19%",
      shop: "深圳 -14%",
      rider: "深圳 -13%",
      newShop: "深圳 +7%",
      avgOrder: "深圳 -7%",
    },
    {
      order: "南京 -22%",
      shop: "南京 -7%",
      rider: "南京 -7%",
      newShop: "南京 +16%",
      avgOrder: "南京 -8%",
    },
    {
      order: "杭州 +15%",
      shop: "杭州 +9%",
      rider: "杭州 -10%",
      newShop: "杭州 -11%",
      avgOrder: "杭州 +7%",
    },
    {
      order: "合肥 -8%",
      shop: "合肥 -5%",
      rider: "合肥 +9%",
      newShop: "合肥 -7%",
      avgOrder: "合肥 -12%",
    },
    {
      order: "济南 +20%",
      shop: "济南 +8%",
      rider: "济南 +16%",
      newShop: "济南 +3%",
      avgOrder: "济南 -12%",
    },
    {
      order: "太原 +8%",
      shop: "太原 -4%",
      rider: "太原 +5%",
      newShop: "太原 +10%",
      avgOrder: "太原 +25%",
    },
    {
      order: "成都 -7%",
      shop: "成都 +19%",
      rider: "成都 -24%",
      newShop: "成都 +13%",
      avgOrder: "成都 -3%",
    },
    {
      order: "重庆 +4%",
      shop: "重庆 -24%",
      rider: "重庆 +12%",
      newShop: "重庆 +9%",
      avgOrder: "重庆 +4%",
    },
    {
      order: "苏州 +16%",
      shop: "苏州 -8%",
      rider: "苏州 +19%",
      newShop: "苏州 -17%",
      avgOrder: "苏州 -15%",
    },
    {
      order: "无锡 +15%",
      shop: "无锡 +12%",
      rider: "无锡 +20%",
      newShop: "无锡 -13%",
      avgOrder: "无锡 -20%",
    },
    {
      order: "常州 -18%",
      shop: "常州 -19%",
      rider: "常州 +15%",
      newShop: "常州 +5%",
      avgOrder: "常州 +8%",
    },
    {
      order: "温州 -21%",
      shop: "温州 +20%",
      rider: "温州 +8%",
      newShop: "温州 -21%",
      avgOrder: "温州 +11%",
    },
    {
      order: "哈尔滨 -19%",
      shop: "哈尔滨 -17%",
      rider: "哈尔滨 -9%",
      newShop: "哈尔滨 -23%",
      avgOrder: "哈尔滨 +18%",
    },
    {
      order: "长春 -2%",
      shop: "长春 +18%",
      rider: "长春 -20%",
      newShop: "长春 -4%",
      avgOrder: "长春 -24%",
    },
    {
      order: "大连 +22%",
      shop: "大连 -15%",
      rider: "大连 -6%",
      newShop: "大连 -16%",
      avgOrder: "大连 +9%",
    },
    {
      order: "沈阳 -15%",
      shop: "沈阳 -8%",
      rider: "沈阳 -17%",
      newShop: "沈阳 +14%",
      avgOrder: "沈阳 -14%",
    },
    {
      order: "拉萨 -4%",
      shop: "拉萨 -17%",
      rider: "拉萨 -17%",
      newShop: "拉萨 +19%",
      avgOrder: "拉萨 -21%",
    },
    {
      order: "呼和浩特 -10%",
      shop: "呼和浩特 +15%",
      rider: "呼和浩特 +17%",
      newShop: "呼和浩特 +21%",
      avgOrder: "呼和浩特 +11%",
    },
    {
      order: "武汉 +15%",
      shop: "武汉 -12%",
      rider: "武汉 +18%",
      newShop: "武汉 +15%",
      avgOrder: "武汉 -7%",
    },
    {
      order: "南宁 -17%",
      shop: "南宁 -13%",
      rider: "南宁 -23%",
      newShop: "南宁 -13%",
      avgOrder: "南宁 -14%",
    },
  ];
  const salesListData = ref(salesListMockData);

  // 实时订单
  const realTimeOrderMockData = {
    date: [
      "12:25:13",
      "12:25:17",
      "12:25:22",
      "12:25:27",
      "12:25:32",
      "12:25:37",
      "12:25:42",
      "12:25:47",
      "12:25:52",
      "12:25:57",
    ],
    data: [1143, 769, 251, 733, 335, 969, 869, 1390, 168, 1391],
  };
  const realTimeOrder = ref(realTimeOrderMockData);

  let task: number;
  onMounted(() => {
    task = setInterval(() => {
      // 用户总数
      todayUser.value = todayUser.value + 10;
      growthLastDay.value = growthLastDay.value + 1;
      growthLastMonth.value = growthLastMonth.value + 1;

      // 平均年龄
      averageAge.value = averageAge.value + 1;
      const _ageData = [...ageData.value];
      _ageData.map((item) => {
        item.startValue = item.value;
        item.value += random(100);
        return item;
      });
      ageData.value = _ageData;

      // 设备统计
      const _deviceData = { ...deviceData.value };
      _deviceData.totalDevices += random(100);
      _deviceData.devices.forEach((item) => {
        item.value += random(100);
      });
      deviceData.value = _deviceData;

      // 性别统计
      genderData.value = genderData.value.map((item) => {
        item.value += random(100);
        return item;
      });

      // 店铺统计
      const _onLineData = { ...onLineData.value };
      _onLineData.orderData.data1 = _onLineData.orderData.data1.map(
        (item) => `${~~item + random(10)}`
      );
      _onLineData.orderData.data2 = _onLineData.orderData.data2.map(
        (item) => `${~~item + random(10)}`
      );
      _onLineData.rateData.data1 = _onLineData.rateData.data1.map(
        (item) => `${~~item + random(10)}`
      );
      _onLineData.rateData.data2 = _onLineData.rateData.data2.map(
        (item) => `${~~item + random(10)}`
      );
      onLineData.value = _onLineData;

      // 热门分类
      const _hotCategoryData = { ...hotCategoryData.value };
      _hotCategoryData.data1.data1 = _hotCategoryData.data1.data1.map(
        (v) => v + random(10)
      );
      _hotCategoryData.data1.data2 = _hotCategoryData.data1.data2.map(
        (v) => v + random(10)
      );
      _hotCategoryData.data2.data1 = _hotCategoryData.data2.data1.map(
        (v) => v + random(10)
      );
      _hotCategoryData.data2.data2 = _hotCategoryData.data2.data2.map(
        (v) => v + random(10)
      );
      hotCategoryData.value = _hotCategoryData;

      // 顶部
      const _headerData = { ...headerData.value };
      _headerData.headerData = _headerData.headerData.map((item) => {
        item.startVal = item.endVal;
        item.endVal = item.endVal + random(100);
        return item;
      });
      _headerData.project = _headerData.project.map((item) => {
        const val = parseFloat(item.value) + 0.1;
        item.value = `${val.toFixed(2)}%`;
        return item;
      });
      headerData.value = _headerData;
    }, 3000);
  });
  onUnmounted(() => {
    task && clearInterval(task);
  });

  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAge,
    deviceData,
    genderData,
    onLineData,
    hotCategoryData,
    headerData,
    salesListData,
    realTimeOrder,
  };
}
