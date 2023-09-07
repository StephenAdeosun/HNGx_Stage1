document.addEventListener('DOMContentLoaded', function () {
    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        return daysOfWeek[dayIndex];
    }

    // Function to get the current UTC time in HH:MM:SS format
    function getCurrentUTCTime() {
        const currentDate = new Date();
        const hours = String(currentDate.getUTCHours()).padStart(2, '0');
        const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds} UTC`;
    }

    // Update the elements with the current day of the week and UTC time
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    currentDayElement.textContent = getCurrentDayOfWeek();
    currentUTCTimeElement.textContent = getCurrentUTCTime();
});
