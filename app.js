// Get current date
var currentDate = new Date();
        
// Format the date as desired (e.g., YYYY-MM-DD)
var formattedDate = currentDate.toISOString().slice(0,10);

// Display the date in an HTML element
document.getElementById('currentDay').textContent = formattedDate;





// Function to get the current time in West African Time (WAT)
function getCurrentTimeWAT() {
    const now = new Date();
    const utcOffset = 1; // West African Time is UTC+1

    // Calculate the UTC time + UTC offset to get WAT time
    const watTime = new Date(now.getTime() + (utcOffset * 60 * 60 * 1000));

    // Format the time as HH:MM:SS
    const hours = watTime.getHours().toString().padStart(2, '0');
    const minutes = watTime.getMinutes().toString().padStart(2, '0');
    const seconds = watTime.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

// Update the current time every second
function updateTime() {
    const currentTimeElement = document.getElementById('currentTimeUTC');
    currentTimeElement.textContent = getCurrentTimeWAT();
}

// Update time immediately on page load
updateTime();

// Update time every second
setInterval(updateTime, 1000);