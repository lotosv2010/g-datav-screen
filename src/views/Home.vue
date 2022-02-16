<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>icon font</p>
    <g-icon-more />
    <g-icon-arrow />
    <g-icon-cross />
    <p>
      <g-icon name="more" :style="{ width: '30px', height: '30px' }"></g-icon>
    </p>
    <p>
      <g-icon
        name="arrow"
        :style="{ width: '30px', height: '30px', color: 'green' }"
      />
    </p>
    <p>
      <g-icon
        name="cross"
        :style="{ width: '30px', height: '30px', color: 'orange' }"
      />
    </p>
    <p>
      <g-icon
        prefix="icon-"
        name="auto"
        :style="{ width: '30px', height: '30px', color: 'orange' }"
      />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
<style lang="scss" scope>
svg {
  color: lightcoral;
}
</style>
