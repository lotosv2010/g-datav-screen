<template>
  <div class="home">
    <g-container :options="{ height: 2160, width: 3840 }">
      <div>111</div>
      <div>222</div>
      <div>333</div>
    </g-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
<style lang="scss" scope>
.home {
  font-size: 100px;
}
</style>
