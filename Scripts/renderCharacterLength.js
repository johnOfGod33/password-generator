const valueDiv = document.querySelector(
  ".passwordSettings_options_characterLength_info_value"
);
const characterLengthInput = document.querySelector(
  ".passwordSettings_options_characterLength_input input"
);

valueDiv.textContent = characterLengthInput.value;

characterLengthInput.addEventListener("input", (event) => {
  valueDiv.textContent = event.target.value;
});
