<template>
  <div class="mb-2">
    <div
      class="bg-white flex cursor-pointer hover:bg-details"
      @click="accordionToggle"
    >
      <img
        src="~/assets/images/question.png"
        alt="Aのマーク"
        class="h-8 mt-3 md:mt-4 ml-4 md:ml-5 md:mb-3"
      />
      <p
        class="px-4 md:px-5 pr-3 -mt-1 md:mt-0 pb-3 md:pb-4 leading-5 md:text-base text-sm w-full whitespace-pre-line"
      >
        {{ question }}
      </p>
      <img
        v-if="isOpen"
        src="~/assets/images/up.png"
        alt="上向きの矢印"
        class="h-3 mr-6 mt-5 md:mt-6"
      />
      <img
        v-else
        src="~/assets/images/down.png"
        alt="下向きの矢印"
        class="h-3 mr-6 mt-5 md:mt-6"
      />
    </div>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="isOpen" class="bg-details flex js-accordion-target">
        <img
          src="~/assets/images/answer.png"
          alt="Aのマーク"
          class="h-8 mt-3 md:mt-4 ml-4 md:ml-5"
        />
        <p
          class="-mt-1 md:mt-0 pl-4 md:pl-5 pr-5 md:pr-6 pb-3 md:pb-4 leading-5 md:text-base text-sm whitespace-pre-line"
        >
          {{ answer }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      default: '',
    },
    answer: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    accordionToggle() {
      this.isOpen = !this.isOpen
    },
    // animation
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scrollHeight + 16 + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 16 + 'px'
    },
    leave(el) {
      el.style.height = '0'
    },
  },
}
</script>

<style scoped>
.js-accordion-target {
  transition: height 0.4s ease-in-out;
  overflow: hidden;
}
.js-accordion-enter-active {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: js-accordion--anime__opend;
}
.js-accordion-leave-active {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: js-accordion--anime__closed;
}
@keyframes js-accordion--anime__opend {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes js-accordion--anime__closed {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
