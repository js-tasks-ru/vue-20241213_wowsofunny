import { defineComponent } from 'vue'
import WeatherCard from './WeatherCard.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCard
  },

  props: {
    weatherData: {
      type: Array,
      requared: true
    },

    weatherConditionIcons: {
      type: Object,
      required: true
    }
  },

  template: `
    <ul class="weather-list unstyled-list">
      <WeatherCard v-for="item in weatherData" :weatherCardData="item" :weatherConditionIcons="weatherConditionIcons"/>
    </ul>
  `,
})
