document.getElementById('calculate-btn').addEventListener('click', function(event) {
    event.preventDefault();
    calculateTime();
  });
  
  function calculateTime() {
    const checkInInput = document.getElementById('check-in-time');
    const checkOutInput = document.getElementById('check-out-time');
    const remainingTimeInput = document.getElementById('remaining-time');
  
    const checkInTime = new Date(checkInInput.value);
    const checkOutTime = new Date(checkInTime.getTime() + 8 * 60 * 60 * 1000);
    const currentTime = new Date();
  
    // Format checkOutTime as YYYY-MM-DDTHH:MM
    const checkOutYear = checkOutTime.getFullYear();
    const checkOutMonth = (checkOutTime.getMonth() + 1).toString().padStart(2, '0');
    const checkOutDay = checkOutTime.getDate().toString().padStart(2, '0');
    const checkOutHours = checkOutTime.getHours().toString().padStart(2, '0');
    const checkOutMinutes = checkOutTime.getMinutes().toString().padStart(2, '0');
  
    checkOutInput.value = `${checkOutYear}-${checkOutMonth}-${checkOutDay}T${checkOutHours}:${checkOutMinutes}`;
  
    const remainingTimeMs = 8 * 60 * 60 * 1000 - (currentTime.getTime() - checkInTime.getTime());
    
    const remainingHours = Math.floor(remainingTimeMs / (60 * 60 * 1000));
    const remainingMinutes = Math.floor((remainingTimeMs % (60 * 60 * 1000)) / (60 * 1000));
 
    remainingTimeInput.value = `${remainingHours} hours ${remainingMinutes} minutes`;
  }

// ---new code