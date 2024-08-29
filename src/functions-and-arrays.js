// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2

    } else return num1
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
/**
 * @param {Array} arr The array
*/
function findLongestWord(arr) {
    let longWords = null

    for (i = 0; i < arr.length; i++) {
        if (!longWords || longWords.length < arr[i].length) {
            longWords = arr[i]
        }


    }

    return longWords
}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
    let sumNumber = 0
    for (i = 0; i < num.length; i++) {
        sumNumber += num[i]

    }
    return sumNumber
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num1) {
    let sumNumber = 0
    if (num1.length === 0) {
        return 0
    }
    for (i = 0; i < num1.length; i++) {
        sumNumber += num1[i]

    }
    return sumNumber / num1.length

}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    let result = false
    if (arr.length === 0) {
        return null
    }
    arr.forEach((element, index) => {

        if (element === word) {
            result = true

        }
    })
    return result
}
