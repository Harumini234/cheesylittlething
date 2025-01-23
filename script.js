// Handle the "Next" button on Page 1
document.getElementById("next-button").addEventListener("click", () => {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
});

// Handle the "Yes" and "No" buttons on Page 2
document.getElementById("yes-button").addEventListener("click", () => {
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";
});

document.getElementById("no-button").addEventListener("click", () => {
  alert("Haha funny guy - Wrong answer! Try again. 😜");
});

// Handle food selection on Page 3
let selectedFood = "";
document.getElementById("food1").addEventListener("click", () => {
  selectedFood = "Pizza";
  document.getElementById("next-food-button").style.display = "block";
});
document.getElementById("food2").addEventListener("click", () => {
  selectedFood = "Sushi";
  document.getElementById("next-food-button").style.display = "block";
});
document.getElementById("food3").addEventListener("click", () => {
  selectedFood = "Pasta";
  document.getElementById("next-food-button").style.display = "block";
});

document.getElementById("next-food-button").addEventListener("click", () => {
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "block";
});

// Handle time selection on Page 4 with dynamic email
let selectedTime = "";
document.getElementById("submit-time-button").addEventListener("click", () => {
  selectedTime = document.getElementById("dinner-time").value;
  const boyfriendEmail = document.getElementById("boyfriend-email").value;
  
  if (!selectedTime || !boyfriendEmail) {
    alert("Please select a time and enter an email!");
    return;
  }

  // Prepare Google Calendar invite link
  const eventTitle = `Dinner with [Your Name] (${selectedFood})`;
  const eventStartTime = `${new Date().toISOString().split('T')[0]}T${selectedTime}:00`;
  const eventEndTime = new Date(new Date(eventStartTime).getTime() + 60 * 60 * 1000).toISOString().split('T')[1].split('.')[0]; // 1 hour later

  // Google Calendar URL with multiple attendees (you + boyfriend)
  const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStartTime}/${eventEndTime}&details=${encodeURIComponent(`Enjoy your ${selectedFood}!`)}&attendees=mailto:haruminishizawac@gmail.com&attendees=mailto:${boyfriendEmail}`;

  // Show Google Calendar page and button
  document.getElementById("page4").style.display = "none";
  document.getElementById("page5").style.display = "block";

  // Link Google Calendar button to the invite
  document.getElementById("google-calendar-button").addEventListener("click", () => {
    window.open(googleCalendarURL, "_blank");
  });
});
