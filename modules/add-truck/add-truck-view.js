import { isBetween, isEmpty, isNegative } from '../utilities/validation-utilities.js';
import { createElement, createInputField, createSelectField } from '../utilities/view-utilities.js';

class AddTruckView {
  #addButton;
  #modal;

  constructor() {
    this.#addButton = document.getElementById('add-truck-button');

    this.#modal = this.#createModal();

    this.#modal.addEventListener('click', this.#handleCloseModal);
    this.#modal.addEventListener('focusin', this.#handleFocusInput);
  }

  showStep(number) {
    const tags = this.#modal.querySelectorAll('.tag');
    const fields = this.#modal.querySelectorAll('.field');
    const labels = this.#modal.querySelectorAll('.label');

    for (let i = 0; i < 4; ++i) {
      if (i === number) {
        tags[i].classList.add('has-background-link-soft', 'has-text-link-soft-invert');
        fields[i].classList.remove('is-hidden');
        labels[i].focus();
      }
      else {
        tags[i].classList.remove('has-background-link-soft', 'has-text-link-soft-invert');
        fields[i].classList.add('is-hidden');
      }
    }

    const nextButton = this.#modal.querySelector('#next-button');
    const createButton = this.#modal.querySelector('#create-button');

    if (number === 3) {
      nextButton.classList.add('is-hidden');
      createButton.classList.remove('is-hidden');
    }
    else {
      nextButton.classList.remove('is-hidden');
      createButton.classList.add('is-hidden');
    }
  }

  bindShowModal(handler) {
    this.#addButton.addEventListener('click', () => {
      const form = this.#modal.querySelector('form');
      form.reset();

      const select = this.#modal.querySelector('#truck-type');
      const weather = sessionStorage.getItem('weather');
      const wind = sessionStorage.getItem('wind');
      const temperature = sessionStorage.getItem('temperature');
      
      for (let i = 0; i < select.length; ++i) {
        if (select[i].value === 'fragile' && weather.includes('rain') || weather.includes('snow')) {
          select[i].disabled = true;
        }
        else if (select[i].value === 'pallets' && wind >= 50) {
          select[i].disabled = true;
        }
        else if (select[i].value === 'cold' && temperature > 35) {
          select[i].disabled = true;
        }
        else {
          select[i].removeAttribute('disabled');
        }
      }

      document.body.prepend(this.#modal);

      handler();
    });
  }

  bindPreviousStep(handler) {
    const previousButton = this.#modal.querySelector('#previous-button');

    previousButton.addEventListener('click', () => {
      handler();
    });
  }

  bindNextStep(handler) {
    const nextButton = this.#modal.querySelector('#next-button');

    nextButton.addEventListener('click', () => {
      const field = this.#modal.querySelector('.field:not(.is-hidden)');
      const input = field.querySelector('.input');
      const help = field.querySelector('.help');

      if (isEmpty(input.value) || isNaN(input.value)) {
        input.classList.add('is-danger');
        help.textContent = 'Please enter a number';
        return;
      }

      if (input.id === 'truck-length' && !isBetween(input.value, 2, 10)) {
        input.classList.add('is-danger');
        help.textContent = 'Please enter a number between 2 and 10';
        return;
      }
      
      if (input.id === 'truck-width' && !isBetween(input.value, 2, 5)) {
        input.classList.add('is-danger');
        help.textContent = 'Please enter a number between 2 and 5';
        return;
      }

      if (input.id === 'truck-interval' && isNegative(input.value)) {
        input.classList.add('is-danger');
        help.textContent = 'Please enter a non-negative number';
        return;
      }

      handler();
    });
  }

  bindCreateTruck(handler) {
    const createButton = this.#modal.querySelector('#create-button');

    createButton.addEventListener('click', () => {
      const form = this.#modal.querySelector('form');
      
      const length = form['truck-length'].value.trim();
      const width = form['truck-width'].value.trim();
      const interval = form['truck-interval'].value.trim();
      const type = form['truck-type'].value;

      this.#modal.remove();
      
      handler(length, width, interval, type);
    });
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
    title.textContent = 'Add Truck';

    const closeButton = createElement('button', 'delete');
    closeButton.ariaLabel = 'close';

    header.append(title, closeButton);
    return header;
  }

  #createModalBody() {
    const body = createElement('section', 'modal-card-body');
    const tags = createElement('div', 'tags');

    for (let i = 1; i <= 4; ++i) {
      let tag = createElement('span', 'tag', 'is-unselectable');
      tag.textContent = i;

      tags.append(tag);
    }

    const form = createElement('form');

    const lengthInput = createInputField('truck-length', 'Length', 'Between 2 and 10');
    const widthInput = createInputField('truck-width', 'Width', 'Between 2 and 5');
    const intervalInput = createInputField('truck-interval', 'Interval', 'Seconds');

    const typeSelect = createSelectField('truck-type', 'Type', 'general', 'express', 'fragile', 'pallets', 'cold');
    typeSelect.classList.add('mb-3');
    
    form.append(lengthInput, widthInput, intervalInput, typeSelect);
    body.append(tags, form);
    return body;
  }

  #createModalFooter() {
    const footer = createElement('footer', 'modal-card-foot');
    const buttons = createElement('div', 'buttons');

    const previousButton = createElement('button', 'button', 'is-link', 'is-soft');
    previousButton.id = 'previous-button';
    previousButton.textContent = 'Previous';

    const nextButton = createElement('button', 'button', 'is-link', 'is-soft');
    nextButton.id = 'next-button';
    nextButton.textContent = 'Next';

    const createButton = createElement('button', 'button', 'is-success', 'is-soft');
    createButton.id = 'create-button';
    createButton.textContent = 'Create';

    buttons.append(previousButton, nextButton, createButton);
    footer.append(buttons);
    return footer;
  }
}

export { AddTruckView };
