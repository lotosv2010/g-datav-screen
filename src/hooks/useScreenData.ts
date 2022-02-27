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
  };
}
