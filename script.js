function verify() {
  const input = document.getElementById("userInput").value;
  const result = document.getElementById("result");

  if (input.trim() === "") {
    result.textContent = "Please enter a valid ID or number.";
    result.style.color = "red";
  } else {
    result.textContent = `Verifying "${input}"... ✅`;
    result.style.color = "green";
  }
}
