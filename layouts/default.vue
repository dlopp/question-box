<template>
  <div v-show="display" class="flex flex-col min-h-screen">
    <LayoutsHeader />
    <Nuxt class="flex-grow" />
    <ShapesBottom />
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
    }
  },
  mounted() {
    // ビュー全体がレンダリングされた後に全体を表示する
    this.$nextTick(function () {
      this.display = true
    })
  },
}
</script>

<style>
html {
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body p,
body span,
body dl,
h1,
h2,
h3,
h4,
h5,
h6,
button,
input,
textarea,
a {
  transform: rotate(0.03deg);
  -moz-transform: rotate(0.03deg);
  -ms-transform: rotate(0.03deg);
  -o-transform: rotate(0.03deg);
  -webkit-transform: rotate(0.03deg);
}
</style>
