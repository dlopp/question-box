<template>
  <div :class="[isTop ? 'shape-divider-top' : 'shape-divider-bottom']">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isTop: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.shape-divider-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.shape-divider-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

svg {
  position: relative;
  display: block;
  width: calc(132% + 1.3px);
  height: 112px;
}

.shape-fill {
  fill: #fff;
}

@media (max-width: 767px) {
  svg {
    width: calc(142% + 1.3px);
    height: 79px;
  }
}
</style>
