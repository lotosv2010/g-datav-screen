import { ref, onMounted, onUnmounted } from "vue";

export default function (): Record<string, unknown> {
  const todayUser = ref(10000);
  const growthLastDay = ref(10.34);
  const growthLastMonth = ref(15.45);

  let task: number;
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10;
      growthLastDay.value = growthLastDay.value + 1;
      growthLastMonth.value = growthLastMonth.value + 1;
    }, 3000);
  });
  onUnmounted(() => {
    task && clearInterval(task);
  });

  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
  };
}
