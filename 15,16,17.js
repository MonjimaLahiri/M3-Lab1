function filterValues(arr) {
    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
}

// Test Data
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Test Data
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(numbers));

function getLargestNumber(arr) {
    return Math.max(...arr);
}

// Test Data
let numArray = [12, 45, 78, 23, 56, 89, 34];
console.log(getLargestNumber(numArray));
