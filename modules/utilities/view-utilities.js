/**
 * Creates an instance of the element for the specified tag with classes.
 * @param {string} tagName - The name of an element. 
 * @param {...string} classNames - The names of classes.
 * @returns {HTMLElement}
 */
export function createElement(tagName, ...classNames) {
  const element = document.createElement(tagName);

  for (let className of classNames) {
    element.classList.add(className);
  }

  return element;
}

/**
 * Creates an instance of an input field.
 * @param {string} id - The id of the input.
 * @param {string} text - The text of the label.
 * @param {string} placeholder - The placeholder text of the input.
 * @returns {HTMLDivElement}
 */
export function createInputField(id, text, placeholder) {
  const field = document.createElement('div');
  field.className = 'field';

  const label = document.createElement('label');
  label.className = 'label';
  label.htmlFor = id;
  label.textContent = text;

  const control = document.createElement('div');
  control.className = 'control';

  const input = document.createElement('input');
  input.className = 'input';
  input.id = id;
  input.name = id;
  input.type = 'text';
  input.placeholder = placeholder;

  const help = document.createElement('p');
  help.className = 'help is-danger';
  
  control.append(input);
  field.append(label, control, help);
  return field;
}

/**
 * Creates an instance of a select field.
 * @param {string} id - The id of the select.
 * @param {string} text - The text of the label.
 * @param  {...string} options - The option values of the select.
 * @returns {HTMLDivElement}
 */
export function createSelectField(id, text, ...options) {
  const field = document.createElement('div');
  field.className = 'field';

  const label = document.createElement('label');
  label.className = 'label';
  label.htmlFor = id;
  label.textContent = text;

  const control = document.createElement('div');
  control.className = 'control';

  const selectWrapper = document.createElement('div');
  selectWrapper.className = 'select is-fullwidth';

  const select = document.createElement('select');
  select.className = 'is-capitalized';
  select.id = id;
  select.name = id;

  for (let option of options) {
    select.options.add(new Option(option, option));
  }

  selectWrapper.append(select);
  control.append(selectWrapper);
  field.append(label, control);
  return field;
}
