import { isEmpty } from '../utilities/validation-utilities.js';
import { createElement, createInputField } from '../utilities/view-utilities.js';

class ChangeWeatherView {
  #changeButton;
  #weatherTag;
  #temperatureTag;
  #windTag;
  #modal;
  #notification;

  constructor() {
    this.#changeButton = document.getElementById('change-weather-button');
    this.#weatherTag = document.getElementById('weather-tag');
    this.#temperatureTag = document.getElementById('temperature-tag');
    this.#windTag = document.getElementById('wind-tag');
    this.#modal = this.#createModal();
    this.#notification = this.#createNotification();
  }

  init() {
    this.#changeButton.addEventListener('click', this.#handleShowModal);
    this.#modal.addEventListener('click', this.#handleCloseModal);
    this.#modal.addEventListener('focusin', this.#handleFocusInput);
    this.#modal.addEventListener('submit', this.#handleSubmit);
  }

  showWeather(location, weather, temperature, wind) {
    const locationTag = this.#modal.querySelector('#location-tag');
    locationTag.textContent = location;

    this.#weatherTag.textContent = weather;
    this.#temperatureTag.textContent = temperature + '°C';
    this.#windTag.textContent = wind + ' km/h';
  }

  showError(message) {
    this.#notification.textContent = message;

    document.body.prepend(this.#notification);

    setTimeout(() => {
      this.#notification.classList.add('fade');
    }, 5000);

    setTimeout(() => {
      this.#notification.classList.remove('fade');
      this.#notification.remove();
    }, 6000);
  }

  bindChangeWeather(handler) {
    const changeButton = this.#modal.querySelector('#change-button');

    changeButton.addEventListener('click', () => {
      const input = this.#modal.querySelector('.input');
      const help = this.#modal.querySelector('.help');

      if (isEmpty(input.value)) {
        input.classList.add('is-danger');
        help.textContent = 'Please enter a location';
        return;
      }

      this.#modal.remove();

      const location = input.value.trim().toLowerCase();
      handler(location);
    });
  }

  #handleShowModal = () => {
    const form = this.#modal.querySelector('form');
    form.reset();

    document.body.prepend(this.#modal);

    const input = form['location'];
    input.focus();
  }

  #handleCloseModal = (event) => {
    const isCloseTarget = event.target.className === 'modal-background' || event.target.className === 'delete';
    if (!isCloseTarget) { return; }

    this.#modal.remove();
  }

  #handleFocusInput = (event) => {
    const isError = event.target.classList.contains('is-danger');
    if (!isError) { return; }

    event.target.classList.remove('is-danger');

    const help = event.target.closest('.field').querySelector('.help');
    help.textContent = '';
  }

  #handleSubmit = (event) => {
    event.preventDefault();
  }

  #createModal() {
    const modal = createElement('div', 'modal', 'is-active');
    const background = createElement('div', 'modal-background');
    const card = createElement('div', 'modal-card');

    const cardHeader = this.#createModalHeader();
    const cardBody = this.#createModalBody();
    const cardFooter = this.#createModalFooter();

    card.append(cardHeader, cardBody, cardFooter);
    modal.append(background, card);
    return modal;
  }

  #createModalHeader() {
    const header = createElement('header', 'modal-card-head');

    const title = createElement('p', 'modal-card-title');
    title.textContent = 'Change Weather';

    const closeButton = createElement('button', 'delete');
    closeButton.ariaLabel = 'close';

    header.append(title, closeButton);
    return header;
  }

  #createModalBody() {
    const body = createElement('section', 'modal-card-body');
    const tags = createElement('div', 'tags', 'has-addons');

    const titleTag = createElement('span', 'tag', 'is-medium', 'is-unselectable', 'has-background-dark-soft', 'has-text-dark-soft-invert');
    titleTag.textContent = 'Current Location';

    const locationTag = createElement('span', 'tag', 'is-medium', 'is-unselectable', 'has-background-info-soft', 'has-text-info-soft-invert');
    locationTag.id = 'location-tag';

    const form = createElement('form');

    const cityInput = createInputField('location', 'Location', 'e.g. Amsterdam');

    tags.append(titleTag, locationTag);
    form.append(cityInput);
    body.append(tags, form);
    return body;
  }

  #createModalFooter() {
    const footer = createElement('footer', 'modal-card-foot');

    const changeButton = createElement('button', 'button', 'is-success', 'is-soft');
    changeButton.id = 'change-button';
    changeButton.textContent = 'Change';

    footer.append(changeButton);
    return footer;
  }

  #createNotification() {
    const notification = createElement('div', 'notification', 'has-background-danger-soft', 'has-text-danger-soft-invert');
    notification.id = 'notification';
    return notification;
  }
}

export { ChangeWeatherView };
