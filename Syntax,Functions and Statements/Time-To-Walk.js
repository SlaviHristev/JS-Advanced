function calculateTravelTime(steps, footprintLength, speed) {
    const totalDistance = steps * footprintLength;

    const walkingTimeHours = totalDistance / (speed * 1000);

    const breakTimeMinutes = Math.floor(totalDistance / 500);

    const totalTimeHours = walkingTimeHours + breakTimeMinutes / 60;
    const totalTimeMinutes = Math.floor(totalTimeHours * 60);
    const totalTimeSeconds = Math.round((totalTimeHours * 3600) % 60);

    const formattedHours = totalTimeHours < 10 ? '0' + Math.floor(totalTimeHours) : Math.floor(totalTimeHours);
    const formattedMinutes = totalTimeMinutes < 10 ? '0' + totalTimeMinutes : totalTimeMinutes;
    const formattedSeconds = totalTimeSeconds < 10 ? '0' + totalTimeSeconds : totalTimeSeconds;

    const formattedResult = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    console.log(formattedResult);
}


calculateTravelTime(4000, 0.60, 5)