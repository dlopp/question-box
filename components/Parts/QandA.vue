<template>
  <div class="mb-2">
    <div class="flex bg-white items-center pl-8 py-2">
      <img
        class="inline-block h-8"
        src="~/assets/images/question.png"
        alt="Qのアイコン"
      />
      <button
        type="button"
        class="h-12 w-full text-left pl-5 text-sm md:text-base"
        style="outline: none"
        @click="accordionToggle()"
      >
        {{ question }}
      </button>
      <img
        v-if="isOpen"
        class="inline-block h-3 pr-10"
        src="~/assets/images/up.png"
        alt="矢印"
      />
      <img
        v-else
        class="inline-block h-3 pr-10"
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
      <div v-if="isOpen" class="js-accordion-target flex pl-8 pt-4 bg-details">
        <img
          class="inline-block h-8"
          src="~/assets/images/answer.png"
          alt="Aのアイコン"
        />
        <p
          class="pl-5 leading-6 pr-4 -mt-6 text-sm md:text-base whitespace-pre-line"
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
