import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const KELVIN_TO_CELSIUS_OFFSET = 273.15;

    const formatKelvinToCelsius = (value) => {
      return (value - KELVIN_TO_CELSIUS_OFFSET).toFixed(1)
    };

    const formatStringTimeToMinutes = (stringTime) => {
      const [hours, minutes] = stringTime.split(':').map(Number);
      return hours * 60 + minutes;
    }

    const isNight = (location, stringTime) => {
      return formatStringTimeToMinutes(stringTime) > formatStringTimeToMinutes(location.current.sunset) || formatStringTimeToMinutes(stringTime) < formatStringTimeToMinutes(location.current.sunrise);
    };

    return {
      weatherData: getWeatherData(),
      weatherConditionIcons: WeatherConditionIcons,
      formatKelvinToCelsius,
      isNight
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="item in weatherData" class="weather-card" :class="{ 'weather-card--night': isNight(item, item.current.dt) }">
          <div v-if="item.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ item.alert.sender_name}}: {{ item.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ item.geographic_name}}
            </h2>
            <div class="weather-card__time">
              {{ item.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="item.current.weather.description">{{ weatherConditionIcons[item.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ formatKelvinToCelsius(item.current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ Math.round(item.current.pressure * 0.75) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ item.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ item.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ item.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
