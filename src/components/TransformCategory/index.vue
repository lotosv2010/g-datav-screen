<template>
  <div class="transform-category">
    <div
      class="category"
      v-for="(item, index) in data"
      :key="item"
      @click="onClick(index)"
      @mouseenter="onMouseenter"
      @mouseleave="onmouseleave"
    >
      <div
        :class="{ selected: selected === index }"
        :style="{ background: selected === index ? color[0] : 'inherit' }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "TransformCategory",
  props: {
    data: Array,
    color: {
      type: Array,
      default() {
        return ["rgb(140, 160, 173)", "rgb(80, 80, 80)"];
      },
    },
  },
  setup(ctx) {
    const selected = ref(0);
    let task;
    const onClick = (index) => {
      selected.value = index;
    };
    //! 只要鼠标指针移入（或移出）事件所绑定的元素或其子元素，都会触发mouseover（或mouseout）事件
    //! 只有鼠标指针移入（或移出）事件所绑定的元素时，才会触发mouseenter（或mouseleave）事件
    const onMouseenter = (e) => {
      e.target.style.background = ctx.color[1];
    };
    const onmouseleave = (e) => {
      e.target.style.background = "";
    };
    const update = () => {
      task && clearInterval(task);
      task = setInterval(() => {
        if (selected.value + 1 === ctx.data.length) {
          selected.value = 0;
        } else {
          selected.value += 1;
        }
      }, 2000);
    };
    onMounted(update);
    onUnmounted(() => task && clearInterval(task));
    return {
      selected,
      onClick,
      onMouseenter,
      onmouseleave,
    };
  },
});
</script>

<style lang="scss" scoped>
.transform-category {
  display: flex;
  width: 100%;
  height: 100%;
  .category {
    flex: 1;
    background: rgb(53, 57, 65);
    font-size: 24px;
    color: rgb(144, 160, 174);
    .hovered {
      background: rgb(80, 80, 80);
    }
    .selected {
      background: rgb(140, 160, 173);
      color: #fff;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
