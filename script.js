const clocks = [
  { id: "sl", zone: "Asia/Colombo" },
  { id: "india", zone: "Asia/Kolkata" },
  { id: "london", zone: "Europe/London" },
  { id: "newyork", zone: "America/New_York" },
  { id: "tokyo", zone: "Asia/Tokyo" },
];

const gradients = [
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // deep blue-gray
  "linear-gradient(135deg, #232526, #414345)",           // dark gray gradient
  "linear-gradient(135deg, #141e30, #243b55)",           // navy blue
  "linear-gradient(135deg, #000428, #004e92)",           // midnight blue
  "linear-gradient(135deg, #0f0c29, #302b63, #24243e)"  // cosmic dark
];


let currentGradient = 0;

// Function to update clocks
function updateClocks() {
    clocks.forEach(clock => {
        const now = new Date();

        const timeStr = now.toLocaleTimeString("en-US", {
            timeZone: clock.zone,
            hour12: true
        });

        const dateStr = now.toLocaleDateString("en-US", {
            timeZone: clock.zone,
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        });

        document.querySelector(`#${clock.id} .time`).textContent = timeStr;
        document.querySelector(`#${clock.id} .date`).textContent = dateStr;
    });
}

// Function to change background gradient
function changeBackground() {
    document.body.style.background = gradients[currentGradient];
    currentGradient = (currentGradient + 1) % gradients.length;
}

// Update clocks every second
setInterval(updateClocks, 1000);
updateClocks(); // initial call

// Change background every 5 seconds
setInterval(changeBackground, 5000);
changeBackground(); // initial call
