function solve(arr) {
    var rounds = Number(arr[4]);
    var coordinates = arr[3].split(' ');
    var x = Number(coordinates[0]);
    var y = Number(coordinates[1]);

    var
        spaceSysOne = arr[0].split(' '),
        nameOne = spaceSysOne.shift(),
        xOne = Number(spaceSysOne[0]),
        yOne = Number(spaceSysOne[1]),

        spaceSysTwo = arr[1].split(' '),
        nameTwo = spaceSysTwo.shift(),
        xTwo = Number(spaceSysTwo[0]),
        yTwo = Number(spaceSysTwo[1]),

        spaceSysThree = arr[2].split(' '),
        nameThree = spaceSysThree.shift(),
        xThree = Number(spaceSysThree[0]),
        yThree = Number(spaceSysThree[1]);

    while (rounds >= 0) {
        //console.log(y);
        if ((x >= xOne-1 && x <= xOne+1) && (y >= yOne-1 && y <= yOne+1))
            console.log(nameOne.toLowerCase());
        else if ((x >= xTwo-1 && x <= xTwo+1) && (y >= yTwo-1 && y <= yTwo+1))
            console.log(nameTwo.toLowerCase());
        else if ((x >= xThree-1 && x <= xThree+1) && (y >= yThree-1 && y <= yThree+1))
            console.log(nameThree.toLowerCase());
        else
            console.log('space');

        y++;
        rounds--;
    }
}
var arr = [
    'Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
    '4'
];
solve(arr);