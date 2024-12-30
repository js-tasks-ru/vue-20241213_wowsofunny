import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  props: {
    weatherCardData: {
      type: Object,
      requared: true
    },

    weatherConditionIcons: {
      type: Object,
      required: true
    }
  },

  setup() {
    const KELVIN_TO_CELSIUS_OFFSET = 273.15;

    const formatKelvinToCelsius = (value) => {
      return (value - KELVIN_TO_CELSIUS_OFFSET).toFixed(1)
    };

    const isNight = (location) => {
      return location.current.dt > location.current.sunset || location.current.dt < location.current.sunrise;
    };

    return {
      formatKelvinToCelsius,
      isNight
    }
  },

  template: `
    <li class="weather-card" :class="{ 'weather-card--night': isNight(weatherCardData) }">
      <div v-if="weatherCardData.alert" class="weather-alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">{{ weatherCardData.alert.sender_name}}: {{ weatherCardData.alert.description }}</span>
      </div>
      <div>
        <h2 class="weather-card__name">
          {{ weatherCardData.geographic_name}}
        </h2>
        <div class="weather-card__time">
          {{ weatherCardData.current.dt }}
        </div>
      </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="weatherCardData.current.weather.description">{{ weatherConditionIcons[weatherCardData.current.weather.id] }}</div>
        <div class="weather-conditions__temp">{{ formatKelvinToCelsius(weatherCardData.current.temp) }} °C</div>
      </div>
      <div class="weather-details">
        <div class="weather-details__item">
          <div class="weather-details__item-label">Давление, мм рт. ст.</div>
          <div class="weather-details__item-value">{{ Math.round(weatherCardData.current.pressure * 0.75) }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Влажность, %</div>
          <div class="weather-details__item-value">{{ weatherCardData.current.humidity }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Облачность, %</div>
          <div class="weather-details__item-value">{{ weatherCardData.current.clouds }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Ветер, м/с</div>
          <div class="weather-details__item-value">{{ weatherCardData.current.wind_speed }}</div>
        </div>
      </div>
    </li>
  `,
})
