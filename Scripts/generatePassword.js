const getLowerCharacter = () => {
  return "abcdefghijklmnopkrstuvwxyz";
};

const getUpperCharacter = () => {
  return "ABCDEFGHIJKLMNOPKRSTUVWXYZ";
};

const getNumbers = () => {
  return "0123456789";
};

const getSymbols = () => {
  return "&#{}[]+-*/!?@_^€~";
};

const getRandomIndex = (arrLength) => {
  return Math.floor(Math.random() * arrLength);
};

const getCharacterSet = (
  upperIsChecked,
  lowerIsChecked,
  numberIsChecked,
  symbolIsChecked
) => {
  const characterSet = [];

  if (upperIsChecked) {
    characterSet.push(getUpperCharacter());
  }

  if (lowerIsChecked) {
    characterSet.push(getLowerCharacter());
  }

  if (numberIsChecked) {
    characterSet.push(getNumbers());
  }

  if (symbolIsChecked) {
    characterSet.push(getSymbols());
  }

  return characterSet;
};

const generatePassword = (
  passwordLength,
  upperIsChecked,
  lowerIsChecked,
  numberIsChecked,
  symbolIsChecked
) => {
  let password = "";
  const characterSet = getCharacterSet(
    upperIsChecked,
    lowerIsChecked,
    numberIsChecked,
    symbolIsChecked
  );

  while (password.length < passwordLength) {
    const randomCategory = characterSet[getRandomIndex(characterSet.length)];
    password += randomCategory[getRandomIndex(randomCategory.length)];
  }

  return password;
};

const generateButton = document.querySelector(
  ".passwordSettings_options_generateButton button"
);

generateButton.addEventListener("click", () => {
  const passwordLength = document.querySelector(
    ".passwordSettings_options_characterLength_input input"
  ).value;
  const upperIsChecked = document.querySelector("#uppercase_checkbox").checked;
  const lowerIsChecked = document.querySelector("#lowercase_checkbox").checked;
  const numberIsChecked = document.querySelector("#numbers_checkbox").checked;
  const symbolIsChecked = document.querySelector("#symbols_checkbox").checked;
  const passwordArea = document.querySelector(".passwordArea_password");
  const password = generatePassword(
    Number(passwordLength),
    upperIsChecked,
    lowerIsChecked,
    numberIsChecked,
    symbolIsChecked
  );

  passwordArea.textContent = password;
});
