import { ref, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";

export default function (): Record<string, unknown> {
  let task: number;
  const date = ref(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  const start = () => {
    task = setInterval(() => {
      date.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  };
  onMounted(start);
  onUnmounted(() => task && clearInterval(task));
  return {
    date,
  };
}
