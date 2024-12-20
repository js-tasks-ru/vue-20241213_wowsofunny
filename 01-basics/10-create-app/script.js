import { defineComponent, createApp } from 'vue';

const Component = defineComponent({
  name: 'Component',
  setup() {
    const getCurrentLocalLongDate = () => {
      return new Date().toLocaleDateString(navigator.language, {dateStyle: 'long'})
    }

    return {
      getCurrentLocalLongDate
    };
  },

  template: `<div>Сегодня {{ getCurrentLocalLongDate() }}</div>`,
});

createApp(Component).mount('#app');
