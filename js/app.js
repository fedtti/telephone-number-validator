const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const output = document.getElementById('results-div');

const checkPhoneNumber = () => {
  if (userInput.value === '') {
    alert('Please, provide a phone number.');
    return;
  }

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const separators = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const regex = new RegExp(`${countryCode}${areaCode}${separators}${phoneNumber}`);

  return output.innerHTML = regex.test(userInput.value) ? `<span class="valid">Valid US phone number</span>: ${userInput.value}`: `<span class="invalid">Invalid US phone number</span>: ${userInput.value}`;
};

userInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    checkPhoneNumber();
  }
}, false);

checkButton.addEventListener('click', checkPhoneNumber, false);

clearButton.addEventListener('click', () => {
  userInput.value = '';
  output.innerHTML = '';
}, false);
