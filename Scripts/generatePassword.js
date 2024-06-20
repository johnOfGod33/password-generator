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
