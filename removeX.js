function solve(arr) {
    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    };
    var matrix = [];
    var arrDuplicate = [];
    arr.forEach(function(line) {
        matrix.push([]);
    });

    for (var i = 1; i < arr.length - 1; i++) {
        for (var j = 1; j < arr[i].length; j++) {
            if (arr[i-1][j+1] && arr[i+1][j-1] && arr[i+1][j+1]) {
                var that = arr[i][j].toString().toLowerCase(),
                    upLeft = arr[i - 1][j - 1].toString().toLowerCase(),
                    upRight = arr[i - 1][j + 1].toString().toLowerCase(),
                    downLeft = arr[i + 1][j - 1].toString().toLowerCase(),
                    downRight = arr[i + 1][j + 1].toString().toLowerCase();
                if (upLeft === that && upRight === that && downLeft === that && downRight === that) {
                    matrix[i - 1].push(j - 1);
                    matrix[i - 1].push(j + 1);
                    matrix[i].push(j);
                    matrix[i + 1].push(j - 1);
                    matrix[i + 1].push(j + 1);
                }
            }
        }
    }

    matrix = matrix.map(function(array) {
        array = array.sort(function(a, b) {return a - b;});
        return _.uniq(array, true);
    });

    var counter = 0;
    arr = arr.map(function(line) {
        for (var n = 0; n < matrix[counter].length; n++) {
            line = line.replaceAt(matrix[counter][n], ' ');
        }
        counter ++;
        line = line.split(' ').join('');
        return line;
    });

    //arr = arr.map(function(line) {
    //    return line.split(' ').join('');
    //});

    arr.forEach(function(line) {
        console.log(line);
    });
}
var _ = require('underscore');

var arr = [
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'
];

var arr = [
    'freee',
    'eeeeeeee',
    'eeeeeeee',
    'yourself',
    'freeeeee',
    'yourselef'
];

//var arr = [
//'^u^',
//'j^l^a',
//'^w^WoWl',
//'adw1w6',
//'(WdWoWgPoop)'
//    ];

solve(arr);

//arr.forEach(function(line) {
//  //  var index = arr.indexOf(line);
//    for (var m = 0; m < matrix[counter].length; m++) {
//        line = line.replaceAt(matrix[counter][m], ' ');
//    }
//    arrDuplicate.push(line);
//
//});
//console.log(arrDuplicate);