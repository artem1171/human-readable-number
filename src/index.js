module.exports = function toReadable (number) {
    let result = '';
    if (number === 0) {
        return 'zero';
    }

    let wordNumber ={
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    if (number < 20) {
        return wordNumber[number];
    }

    let tensNumbers;
    if (number >= 20) {
        tensNumbers = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        }
    }

    let textNumber = number.toString();
    let lengthNumber = number.toString().length;

    if (lengthNumber === 2) {
        if (number % 10 === 0) {
            return tensNumbers[number];
        } else {
            return tensNumbers[number - (number % 10)] + ' ' + wordNumber[number % 10];
        }
    }

    if (lengthNumber === 3) {
        if (number % 100 === 0) {
            return wordNumber[number / 100] + ' ' + 'hundred';
        } else {
            result = wordNumber[(number - (number % 100)) / 100] + ' ' + 'hundred';
            number = number % 100;
            if (number < 20) {
                return result + ' ' + wordNumber[number];
            }
            if (number % 10 === 0) {
                return result + ' ' + tensNumbers[number];
            } else {
                return result + ' ' +tensNumbers[number - (number % 10)] + ' ' + wordNumber[number % 10];
            }
        }
    }

}


