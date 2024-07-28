// capitalise function

function capitalise (word) {
    return word[0].toUpperCase() + word.slice(1);
}

export {capitalise};


function reverseString (word) {
    return word.split("").reverse().join("");
}

export {reverseString}


function add (num1, num2) {
    return Number(num1) + Number(num2);   
}

export {add}

function subtract (num1, num2) {
    return Number(num1) - Number(num2)    
}

export {subtract}

function multiply (num1, num2) {
    return Number(num1) * Number(num2)    
}

export {multiply}

function divide (num1, num2) {
    return Number(num1) / Number(num2)
}

export {divide}


// ceasar cipher

let letter = "abcdefghijklmnopqrstuvwxyz";
let capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function shiftWord (word, shift) {
    let string = "";
    for (let char of word) {
        let index = letter.indexOf(char);
        let bigIndex = capLetter.indexOf(char);

        if (index > -1) {
            if (index == 23) {
                index = -3;
            }   else if (index === 24) {
                index = -2;
            }   else if (index === 25) {
                index = -1;
            }

            string += letter[index + shift];
        }   else if (bigIndex > -1) {
            if (bigIndex == 23) {
                bigIndex = -3;
            }   else if (bigIndex === 24) {
                bigIndex = -2;
            }   else if (bigIndex === 25) {
                bigIndex = -1;
            }

            string += capLetter[bigIndex + shift];
        }   else {
            string += char;
        }
    }
    return string;

}
export {shiftWord};


function analyzeArray (array) {
    let sum = array.reduce((total, num) => {
        return total + num;
    }, 0);
    let average = sum / array.length;
    let minimum = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;

    return {average, minimum, max, length};
}

export {analyzeArray}