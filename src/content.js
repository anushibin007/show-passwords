document.querySelectorAll("input").forEach((input) => {
	if (input.type === "password") {
		input.dataset.originalType = "password";
		input.type = "text";
	} else if (input.dataset.originalType === "password") {
		input.type = "password";
		delete input.dataset.originalType;
	}
});
