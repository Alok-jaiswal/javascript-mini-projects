function calculateMaturityAmount() {
  // get input values from the form element
  const principle = parseFloat(document.getElementById("principle").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const tenure = parseFloat(document.getElementById("tenure").value);

  //perform the Calculation
  const maturityAmount = principle + (principle * interestRate * tenure) / 100;

  // showing result on screen
  document.getElementById(
    "result"
  ).innerHTML = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

// Attach the event listener to the button
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMaturityAmount);
