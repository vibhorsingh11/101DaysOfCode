let arr = [-20, 34, 21, -87, 92, 2147483647];

function LargestSmallest(arr) {
    let largest = Number.MIN_VALUE;
    let smallest = Number.MAX_VALUE;
        for (let number of arr) {
            if (number > largest) {
                largest = number;
            } else if (number < smallest) {
                smallest = number;
            }
        }
    console.log('Largest number ' + largest);
    console.log('Smallest number ' + smallest);
}

LargestSmallest(arr);