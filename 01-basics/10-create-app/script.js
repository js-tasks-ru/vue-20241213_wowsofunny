import { defineComponent, createApp } from 'vue';

const Component = defineComponent({
  name: 'Component',
  template: `<div>Сегодня {{ new Date().toLocaleDateString('en-EN', {dateStyle: 'long'}) }}</div>`,
});

createApp(Component).mount('#app');
