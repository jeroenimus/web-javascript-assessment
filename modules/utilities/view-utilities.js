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
 * Creates an instance of a box.
 * @param {string} id - The id of the box.
 * @param {number} width - The width of the box.
 * @param {number} height - The height of the box.
 * @param {string} colour - The colour of the box.
 * @param {number[][]} matrix - The shape of the box.
 * @returns {HTMLDivElement}
 */
export function createBox(id, width, height, colour, matrix) {
  const box = document.createElement('div');
  box.id = id;
  box.className = 'is-box';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width * 40);
  svg.setAttribute('height', height * 40);

  for (let y = 0; y < 4; ++y) {
    for (let x = 0; x < 4; ++x) {
      if (matrix[y][x] === 1) {
        const rectangle = createRectangle(x * 40, y * 40, colour);
        svg.append(rectangle);
      }
    }
  }

  box.append(svg);
  return box;
}

/**
 * Creates an instance of a rectangle for a box.
 * @param {number} x - The x coordinate of the rectangle.
 * @param {number} y - The y coordinate of the rectangle.
 * @param {string} colour - The colour of the rectangle.
 * @returns {SVGRectElement}
 */
function createRectangle(x, y, colour) {
  const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rectangle.setAttribute('x', x); 
  rectangle.setAttribute('y', y); 
  rectangle.setAttribute('width', 40); 
  rectangle.setAttribute('height', 40); 
  rectangle.setAttribute('stroke', 'gray');
  rectangle.setAttribute('fill', colour); 
  return rectangle;
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

/**
 * Creates an instance of a table.
 * @param {string} id - The id of the table.
 * @param {number} rows - The number of rows in the table.
 * @param {number} columns - The number of columns in the table.
 * @returns {HTMLTableElement}
 */
export function createTable(id, rows, columns) {
  const table = document.createElement('table');
  table.id = id;
  table.className = 'table is-bordered';

  const body = document.createElement('tbody');

  for (let i = 0; i < rows; ++i) {
    const row = document.createElement('tr');
    
    for (let j = 0; j < columns; ++j) {
      row.append(document.createElement('td'));
    }

    body.append(row);
  }

  table.append(body)
  return table;
}
