// Show the second page when the "Next" button is clicked
document.getElementById("next-button").addEventListener("click", () => {
  document.getElementById("page1").style.display = "none"; // Hide the first page
  document.getElementById("page2").style.display = "block"; // Show the second page
});

// Handle the "Yes" and "No" buttons on page 2
document.getElementById("yes-button").addEventListener("click", () => {
  alert("Yay! I knew you'd say yes! ❤️");
});

document.getElementById("no-button").addEventListener("click", () => {
  alert("Wrong answer! Try again. 😜");
});
