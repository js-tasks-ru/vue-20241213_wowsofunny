import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref(null);
    const secondOperand = ref(null);
    const outputValue = computed(() => {
      let result;
      switch(currentOperator.value) {
        case 'sum':
          result = firstOperand.value + secondOperand.value
          break;
        case 'subtract':
          result = firstOperand.value - secondOperand.value
          break;
        case 'multiply':
          result = firstOperand.value * secondOperand.value
          break;
        case 'divide':
          result = firstOperand.value / secondOperand.value
          break;
      }
      return result;
    });

    const currentOperator = ref('sum');

    return {
      outputValue,
      currentOperator,
      firstOperand,
      secondOperand
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" v-model="currentOperator" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="currentOperator" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="currentOperator" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="currentOperator" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand" />

      <div>=</div>

      <output v-show="firstOperand && secondOperand">{{ outputValue}}</output>
    </div>
  `,
})
