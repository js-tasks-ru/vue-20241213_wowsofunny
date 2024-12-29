import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    }
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    const increaseCounter = () => emit('update:count', props.count + 1);
    const decreaseCounter = () => emit('update:count', props.count - 1);

    return {
      increaseCounter,
      decreaseCounter
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" @click="decreaseCounter" :disabled="count === min">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" @click="increaseCounter" :disabled="count === max">➕</UiButton>
    </div>
  `,
})
