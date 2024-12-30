import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherCardList from './WeatherCardList.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCardList
  },

  setup() {
    return {
      weatherData: getWeatherData(),
      weatherConditionIcons: WeatherConditionIcons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <WeatherCardList :weatherData="weatherData" :weatherConditionIcons="weatherConditionIcons"/>
    </div>
  `,
})
