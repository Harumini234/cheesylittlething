//Handle the sparkles
document.addEventListener("mousemove", function(event) {
    let sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);

    sparkle.style.left = event.pageX + "px";
    sparkle.style.top = event.pageY + "px";

    setTimeout(() => {
        sparkle.remove();
    }, 300); // Removes sparkles after 0.3 sec
});


// Handle the "What is this little cheesy thing?" button on Page 1
document.getElementById("next-button").addEventListener("click", () => {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
});

// Handle the "Yes" and "No" buttons on Page 2
document.getElementById("yes-button").addEventListener("click", function() {
   // Show confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Hide current page (Page 2)
    document.getElementById("page2").style.display = "none";

    // Show the next page (Page 3: Food Choices)
    setTimeout(function() {
        document.getElementById("page3").style.display = "block";
    }, 2000); // 2-second delay to let confetti show
});

document.getElementById("no-button").addEventListener("click", () => {
  alert("Haha funny guy. Wrong answer! Try again. 😜");
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
document.getElementById("submit-time-button").addEventListener("click", () => {
  selectedTime = document.getElementById("dinner-time").value;
  const boyfriendEmail = document.getElementById("boyfriend-email").value;

  if (!selectedTime || !boyfriendEmail) {
    alert("Please select a time and enter an email!");
    return;
  }

 // We define the fixed date: 14th February 2025
  const eventYear = 2025;
  const eventMonth = 1; // February (month starts at 0, so 1 = February)
  const eventDay = 14;

  // Split the time entered by the user and make sure they are valid
  const [hours, minutes] = selectedTime.split(':').map(Number);

    console.log("Hours:", hours);   // Log the parsed hours
  console.log("Minutes:", minutes); // Log the parsed minutes

    // Create a new Date object representing the event start time
  // We use Date.UTC() to create the date in UTC time
  // Time is adjusted to Central European Time (CET), so we subtract 1 hour to convert it into UTC
  const eventStartDate = new Date(Date.UTC(eventYear, eventMonth, eventDay, hours - 1, minutes));

  console.log("Adjusted Start Date:", eventStartDate);  // Log the event start date

  // Add 1 hour to the event's start time to get the end time
  const eventEndDate = new Date(eventStartDate.getTime() + 60 * 60 * 1000); // 1 hour later

  // Format the start and end times in ISO format (yyyy-mm-ddThh:mm:ssZ)
  // This is the format required by Google Calendar
  const eventStartTimeFormatted = eventStartDate.toISOString().split('.')[0]; // Remove milliseconds
  const eventEndTimeFormatted = eventEndDate.toISOString().split('.')[0]; // Remove milliseconds

  // Your email and the user's email
  const myEmail = "haruminishizawac@gmail.com"; // Replace with your actual email

  // Event title: dynamic based on the user's meal choice
  const eventTitle = `Dinner with Mini my small cheesy gf (${selectedFood} date)`;

  // Google Calendar URL with multiple attendees (you + the user)
  const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStartTimeFormatted}/${eventEndTimeFormatted}&details=${encodeURIComponent(`Enjoy your ${selectedFood}!`)}&attendees=mailto:${myEmail}&attendees=mailto:${boyfriendEmail}`;

  // Show Google Calendar page and button
  document.getElementById("page4").style.display = "none";
  document.getElementById("page5").style.display = "block";

  // Link Google Calendar button to the invite
  document.getElementById("google-calendar-button").addEventListener("click", () => {
    window.open(googleCalendarURL, "_blank");
  });
});

// Show the first page when the page loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("page1").style.display = "block"; // Show Page 1 on load
});
