import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counterValue = ref(0);

    return {
      counterValue
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        @click="counterValue--"
        :disabled="counterValue === 0"
      >➖</button>

      <span class="count" data-testid="count">{{ counterValue }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        @click="counterValue++"
        :disabled="counterValue === 5"
      >➕</button>
    </div>
  `,
})
