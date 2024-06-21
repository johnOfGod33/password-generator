const copyIcon = document.querySelector(".passwordArea_copyIcon img");

copyIcon.addEventListener("click", () => copyPassword());

const copyPassword = () => {
  const passwordArea = document.querySelector(".passwordArea_password");

  hideCopyMessage();

  navigator.clipboard
    .writeText(passwordArea.textContent)
    .then(() => {
      displayCopyMessage();
    })
    .catch((err) => {
      console.log(err);
    });
};

const displayCopyMessage = () => {
  const copyMessage = document.querySelector(".passwordArea_copyIcon_message");
  copyMessage.style.opacity = "1";
};

const hideCopyMessage = () => {
  const copyMessage = document.querySelector(".passwordArea_copyIcon_message");
  copyMessage.style.opacity = "0";
};
