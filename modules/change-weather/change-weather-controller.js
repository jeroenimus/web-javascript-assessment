class ChangeWeatherController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  init() {
    this.#model.bindWeatherChanged(this.onWeatherChanged);
    this.#model.bindFetchError(this.onFetchError);

    this.#view.init();
    this.#view.bindChangeWeather(this.handleChangeWeather);

    this.#model.fetchWeatherData('amsterdam');
  }

  onWeatherChanged = (location, weather, temperature, wind) => {
    this.#view.showWeather(location, weather, temperature, wind);
  }

  onFetchError = (message) => {
    this.#view.showError(message);
  }

  handleChangeWeather = (location) => {
    this.#model.fetchWeatherData(location);
  }
}

export { ChangeWeatherController };
