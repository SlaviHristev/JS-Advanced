function validateDistances(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isInteger(value) {
        return Number.isInteger(value);
    }

    const distance1ToOrigin = calculateDistance(x1, y1, 0, 0);
    const distance2ToOrigin = calculateDistance(x2, y2, 0, 0);
    const distance1To2 = calculateDistance(x1, y1, x2, y2);

    const isValid1ToOrigin = isInteger(distance1ToOrigin);
    const isValid2ToOrigin = isInteger(distance2ToOrigin);
    const isValid1To2 = isInteger(distance1To2);

    const result1ToOrigin = `{${x1}, ${y1}} to {0, 0} is ${isValid1ToOrigin ? 'valid' : 'invalid'}`;
    const result2ToOrigin = `{${x2}, ${y2}} to {0, 0} is ${isValid2ToOrigin ? 'valid' : 'invalid'}`;
    const result1To2 = `{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid1To2 ? 'valid' : 'invalid'}`;

    console.log(result1ToOrigin);
    console.log(result2ToOrigin);
    console.log(result1To2);
}

validateDistances(3, 0, 0, 4)