const refs = {
  input: document.querySelector('.input'),
  divResultSearch: document.querySelector('.result-search'),
};

refs.input.addEventListener('input', onChange);

let timer = null;
function onChange(e) {
  refs.divResultSearch.innerHTML = ` . . .  `;

  clearTimeout(timer);

  let value = e.currentTarget.value;

  if (value.length === 0) {
    refs.divResultSearch.innerHTML = '';
    return;
  }

  addResult(value);
}

function addResult(value) {
  timer = setTimeout(() => {
    refs.divResultSearch.innerHTML = `
    <li>${value}</li>
    <li>${value}on text</li>
    <li>${value}weceweewcext</li>
    `;
  }, 1000);
}
