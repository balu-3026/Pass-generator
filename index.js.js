
  function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let selectedSets = [];
    if (document.getElementById("uppercase").checked) selectedSets.push(upper);
    if (document.getElementById("lowercase").checked) selectedSets.push(lower);
    if (document.getElementById("numbers").checked) selectedSets.push(numbers);
    if (document.getElementById("symbols").checked) selectedSets.push(symbols);

    if (selectedSets.length === 0) {
      alert("Please select at least one option!");
      return;
    }

    // ✅ Use for loop instead of map
    let passwordArray = [];
    for (let i = 0; i < selectedSets.length; i++) {
      let set = selectedSets[i];
      let randomIndex = Math.floor(Math.random() * set.length);
      passwordArray.push(set[randomIndex]);  // Pick one random char from each set
    }

    // Fill remaining length with random characters
    const allChars = selectedSets.join("");
    while (passwordArray.length < length) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      passwordArray.push(allChars[randomIndex]);
    }

    // Shuffle the password so guaranteed chars don’t always appear at start
    passwordArray = passwordArray.sort(() => Math.random() - 0.5);

    document.getElementById("password").value = passwordArray.join("");
  }

  function copyPassword() {
    const passwordField = document.getElementById("password");
    if (!passwordField.value) {
      alert("No password to copy!");
      return;
    }
    navigator.clipboard.writeText(passwordField.value)
      .then(() => alert("Password copied to clipboard!"))
      .catch(() => alert("Failed to copy password!"));
  }

