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

  let task: number;
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10;
      growthLastDay.value = growthLastDay.value + 1;
      growthLastMonth.value = growthLastMonth.value + 1;

      averageAge.value = averageAge.value + 1;
      const _ageData = [...ageData.value];
      _ageData.map((item) => {
        item.startValue = item.value;
        item.value += random(100);
        return item;
      });
      ageData.value = _ageData;

      const _deviceData = { ...deviceData.value };
      _deviceData.totalDevices += random(100);
      _deviceData.devices.forEach((item) => {
        item.value += random(100);
      });
      deviceData.value = _deviceData;
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
  };
}
