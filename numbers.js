function solve(arr) {
    var regex = (/[0-9]+/g);
    var numArray = arr[0].match(regex);
    var hexArray = [];

    numArray.forEach(function(num) {
        var newNum = '';
        num = Number(num).toString(16);
        if (num.length < 4) {
            var buffer = '';
            for (var j = num.length - 1; j >= 0; j--) {
                buffer = buffer.concat(num[j]);
            }
            while (buffer.length < 4) buffer = buffer.concat('0');
            for (var i = buffer.length - 1; i >= 0; i--) {
                newNum = newNum.concat(buffer[i])
            }
        } else {
            newNum = num;
        }
        newNum = newNum.toUpperCase();
        newNum = '0x' + newNum;
        hexArray.push(newNum);
    });
    var numberString = hexArray.join('-');
    console.log(numberString);
}
var arr = [
    '5tffwj(//*7837xzc2---34rlxXP%$”.'
];
var arr = [
'987----7777//54fgttgkjhgfbhnm n                                                     754rfgghjhghdffdfghgjk0'
];
solve(arr);