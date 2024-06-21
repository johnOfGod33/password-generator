const checkboxInput = document.getElementsByName("checkbox");

const allInputIsNotChecked = () => {
  for (let element of checkboxInput) {
    if (element.checked) {
      return false;
    }
  }

  return true;
};

for (let i = 0; i < checkboxInput.length; ++i) {
  checkboxInput[i].addEventListener("change", () => {
    if (!checkboxInput[i].checked) {
      if (allInputIsNotChecked()) {
        checkboxInput[i].checked = !checkboxInput[i].checked;
      }
    }
  });
}
