(() => {
  let showingPasswords = false;

  document.querySelectorAll("input").forEach((input) => {
    if (input.type === "password") {
      input.dataset.originalType = "password";
      input.type = "text";
      showingPasswords = true;
    } else if (input.dataset.originalType === "password") {
      input.type = "password";
      delete input.dataset.originalType;
      showingPasswords = false;
    }
  });

  chrome.runtime.sendMessage({
    action: "updateIcon",
    showing: showingPasswords,
  });
})();
