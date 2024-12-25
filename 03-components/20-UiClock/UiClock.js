import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(null);
    const interval = ref(null);

    const getCurrentTime = () => {
      return new Intl.DateTimeFormat(navigator.language, {
        timeStyle: 'medium',
      }).format(new Date());
    }

    onMounted(() => {
      currentTime.value = getCurrentTime();

      interval.value = setInterval(() => {
        currentTime.value = getCurrentTime();
      }, 1000);
    })

    onBeforeUnmount(() => {
      clearInterval(interval.value);
    })

    return {
      currentTime,
      interval
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
