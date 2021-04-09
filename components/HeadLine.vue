<template>
  <div class="h-64 md:h-100 pt-12 relative overflow-hidden">
    <ShapesTop />
    <LayoutsContainer v-if="animation">
      <img
        class="mb-2 pl-5 h-16 animate__fadeInUp animate__animated"
        src="~/assets/images/hero2x.png"
        alt="ロゴ"
      />
      <p
        class="text-white text-xl pl-5 mb-2 animate__fadeInUp animate__animated"
      >
        専用質問箱へようこそ！
      </p>
      <p
        class="text-white pl-5 hidden md:block animate__fadeInUp animate__animated"
      >
        dloppについて気になることがあればいつでも質問して下さい！
      </p>
    </LayoutsContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animation: false,
    }
  },
  // DOM構築後にアニメーションをかける
  // ロゴの表示に少し時間がかかるので
  // https://jp.vuejs.org/v2/api/#mounted
  mounted() {
    this.animation = true
  },
}
</script>

<style scoped>
/* from https://animate.style/ */
.animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUp {
  animation-name: fadeInUp;
}
</style>
