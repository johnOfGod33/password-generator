const passwordStrengthChart = document.getElementsByClassName(
  "passwordSettings_options_passwordStrength_info_chart_div"
);

const passwordStrengthName = document.querySelector(
  ".passwordSettings_options_passwordStrength_info_name"
);

const strengthList = {
  1: { name: "WEAK", color: "red" },
  2: { name: "MEDIUM", color: "orange" },
  3: { name: "STRONG", color: "blue" },
  4: { name: "VERY STRONG", color: "green" },
};

const resetChartStyle = () => {
  passwordStrengthName.textContent = "VERY WEAK";

  for (let i = 0; i < 4; i++) {
    passwordStrengthChart[i].style.backgroundColor = "#18111b";
  }
};

const stylePasswordChart = (score) => {
  passwordStrengthName.textContent = strengthList[score].name;

  for (let i = 0; i < score; i++) {
    passwordStrengthChart[i].style.backgroundColor = strengthList[score].color;
  }
};
