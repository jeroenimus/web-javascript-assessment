class ChangeWeatherModel {
  #location;
  #weather;
  #temperature;
  #wind;
  
  #onWeatherChanged;
  #onFetchError;

  constructor() {
    this.#location = '';
    this.#weather = '';
    this.#temperature = 0;
    this.#wind = 0;
  }

  async fetchWeatherData(location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=88675ea572ae4a83821181303240306&q=${location}`;

    try {
      const response = await fetch(url);
  
      if (!response.ok) { throw new Error(response.status); }

      const data = await response.json();

      this.#location = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
      this.#weather = data.current.condition.text;
      this.#temperature = Math.round(data.current.temp_c);
      this.#wind = Math.round(data.current.wind_kph);
    }
    catch (error) {
      if (error.message === '400') {
        this.fetchWeatherData('amsterdam');
        this.#onFetchError('No matching location found');
      }
      else {
        this.#location = 'Amsterdam, North Holland, Netherlands';
        this.#weather = 'Sunny';
        this.#temperature = 20;
        this.#wind = 10;

        this.#onFetchError(error.message);
      }
    }

    this.#onWeatherChanged(this.#location, this.#weather, this.#temperature, this.#wind);

    sessionStorage.setItem('weather', this.#weather);
    sessionStorage.setItem('temperature', this.#temperature);
    sessionStorage.setItem('wind', this.#wind);
  }

  bindWeatherChanged(callback) {
    this.#onWeatherChanged = callback;
  }

  bindFetchError(callback) {
    this.#onFetchError = callback;
  }
}

export { ChangeWeatherModel };
