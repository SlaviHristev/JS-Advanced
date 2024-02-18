function extractNonDecreasingSubset(numbers) {
    return numbers.reduce((result, currentNumber) => {
        if (result.length === 0 || currentNumber >= result[result.length - 1]) {
            result.push(currentNumber);
        }
        return result;
    }, []);
}

const inputNumbers = [1, 3, 2, 4, 7, 5, 8];
const nonDecreasingSubset = extractNonDecreasingSubset(inputNumbers);

console.log(nonDecreasingSubset);