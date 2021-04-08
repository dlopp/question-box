<template>
  <div class="mb-2">
    <div
      class="flex bg-white pl-8 pb-3 cursor-pointer"
      @click="accordionToggle()"
    >
      <img
        class="mt-4 h-8"
        src="~/assets/images/question.png"
        alt="Qのアイコン"
      />
      <p class="w-full pl-5 mt-5 text-sm md:text-base leading-5">
        {{ question }}
      </p>
      <img
        v-if="isOpen"
        class="h-3 ml-2 pr-6 mt-6"
        src="~/assets/images/up.png"
        alt="矢印"
      />
      <img
        v-else
        class="h-3 ml-2 pr-6 mt-6"
        src="~/assets/images/down.png"
        alt="矢印"
      />
    </div>
    <transition
      name="js-accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isOpen" class="js-accordion-target flex pl-8 bg-details">
        <img
          class="h-8 mt-4"
          src="~/assets/images/answer.png"
          alt="Aのアイコン"
        />
        <p
          class="pl-5 -mt-2 leading-6 pr-4 text-sm md:text-base whitespace-pre-line"
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
      el.style.height = el.scrollHeight + 10 + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 10 + 'px'
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
