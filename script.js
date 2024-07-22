//written by Tsitso Mafantiri

function updateClock() {  
    const now = new Date();  // Get current date and time  
    const hours = String(now.getHours()).padStart(2, '0');  // Get hours    
    const minutes = String(now.getMinutes()).padStart(2, '0');  // Get minutes  
    const seconds = String(now.getSeconds()).padStart(2, '0');  // Get seconds 
    const date = new Date(); 

    // Get and format the date (choose desired format)
  const month = date.getMonth() + 1; // Months are zero-indexed
  const day = date.getDate();
  const formattedDate = `${day}/${month}/${date.getFullYear()}`; // Adjust format as needed

  // Get the day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOW = daysOfWeek[date.getDay()];

    const time = `Based on your time zone, today is ${dayOW}. The time is  ${hours}:${minutes}:${seconds} and the date is ${formattedDate}`;
    // Display the time in an HTML element  
    document.getElementById('clock').textContent = time;  
}  

// Update the clock every second  
setInterval(updateClock, 1000);  
updateClock();  // Initial call to display the clock immediately on load
