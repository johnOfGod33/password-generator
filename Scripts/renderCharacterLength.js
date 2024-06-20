const characterLengthValue = document.querySelector(
  ".passwordSettings_options_characterLength_info_value"
);

const characterLengthInput = document.querySelector(
  ".passwordSettings_options_characterLength_input input"
);

const renderCharacterLength = (value) => {
  const tempInputValue = value;
  const progress = (tempInputValue / characterLengthInput.max) * 100;
  const progressBgc = "#8e4ec6";
  const inputBgc = "#18111b";

  characterLengthValue.textContent = tempInputValue;
  characterLengthInput.style.background = `linear-gradient(to right, ${progressBgc} ${progress}%, ${inputBgc} ${progress}%)`;
};

renderCharacterLength(characterLengthInput.value);

characterLengthInput.addEventListener("input", (event) =>
  renderCharacterLength(event.target.value)
);
