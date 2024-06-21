const generateButton = document.querySelector(
  ".passwordSettings_options_generateButton button"
);

generateButton.addEventListener("click", () => handleGenerateButton());

const handleGenerateButton = () => {
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
  const { score } = zxcvbn(password);

  passwordArea.textContent = password;

  resetChartStyle();
  hideCopyMessage();

  if (score > 0) {
    stylePasswordChart(score);
  }
};
