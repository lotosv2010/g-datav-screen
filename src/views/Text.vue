<template>
  <div class="test">
    <h1>g-lib test</h1>
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
    <p>
      <g-loading height="100" width="100">
        <div style="color: red; font-size: 16px">数据加载中....</div>
      </g-loading>
    </p>
  </div>
</template>
