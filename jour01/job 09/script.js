function tri(numbers, order) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length - i - 1; j++) {
            if (order === "asc") {
                if (numbers[j] > numbers[j + 1]) {
                    var temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            } else if (order === "desc") {
                if (numbers[j] < numbers[j + 1]) {
                    var temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }
    }
    return numbers;
}

// Exemples de test
console.log(tri([5, 3, 8, 1, 9, 2], "asc"));  // [1, 2, 3, 5, 8, 9]
console.log(tri([5, 3, 8, 1, 9, 2], "desc")); // [9, 8, 5, 3, 2, 1]