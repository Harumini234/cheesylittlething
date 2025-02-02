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

// Set fixed date to February 14, 2025
  const eventDate = "2025-02-14"; // Valentine's Day
  const [hours, minutes] = selectedTime.split(':'); // Extract hours and minutes from the selected time

// Create the start time in ISO format (Date+Time)
  const eventStartTime = `${eventDate}T${hours}:${minutes}:00Z`; // Adding 'Z' for UTC time
    
// Create the end time, 1 hour after the start time
  const startDate = new Date(eventStartTime);
  const eventEndTime = new Date(startDate.getTime() + 60 * 60 * 1000); // Add 1 hour

// Format the end time in ISO format (Date+Time)
  const eventEndTimeFormatted = eventEndTime.toISOString().split('.')[0]; // Remove milliseconds

// Your email and the user's email
  const myEmail = "haruminishizawac@gmail.com"; // Replace with your actual email

// Event title: dynamic based on the user's meal choice
  const eventTitle = `Dinner with Mini my small cheesy gf (${selectedFood} date)`;

// Google Calendar URL with multiple attendees (you + the user)
  const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStartTime}/${eventEndTimeFormatted}&details=${encodeURIComponent(`Enjoy your ${selectedFood}!`)}&attendees=mailto:${myEmail}&attendees=mailto:${boyfriendEmail}`;

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

