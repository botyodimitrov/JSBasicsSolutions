function solve(arr) {
    var allowedJumps = Number(arr.shift()),
        trackLength = Number(arr.shift());

    var audience = '';
    while (audience.length < trackLength) audience = audience.concat('#');

    var winner = '';
    var fleas = [];
    arr.forEach(function(flea) {
        flea = flea.split(',');
        flea = flea.map(function(item) {
            return item.trim();
        });
        flea[1] = Number(flea[1]);
        flea.push(0);
        fleas.push(flea);
    });

    loop1:
    while (allowedJumps > 0) {
        var index = 0;
        while (index < fleas.length) {
            fleas[index][2] += fleas[index][1];
            if(fleas[index][2] >= trackLength) {
                fleas[index][2] = trackLength;
                winner = fleas[index][0];
                break loop1;
            }
            index ++;

        }
        allowedJumps --;
    }

    console.log(audience);
    console.log(audience);
    fleas.forEach(function(flea) {
        var string = '';
        while (string.length < flea[2]-1) {
            string = string.concat('.');
        }
        string = string.concat(flea[0][0].toUpperCase());
        while (string.length < trackLength ) {
            string = string.concat('.');
        }
        console.log(string);
    });

    console.log(audience);
    console.log(audience);
    fleas.sort(function(f1, f2) {
        return f1[2] - f2[2];
    });
    if (winner) console.log('Winner: ' + winner);
    else console.log('Winner: ' + fleas[fleas.length-1][0]);
}

var arr = [
    '10',
    '19',
    'angel, 9',
    'Boris, 10',
    'Georgi, 3',
    'Dimitar, 7'
];
var arr = [
    '3',
    '40',
    'S, 5',
    'L, 1',
    'O, 7',
    'C, 3',
    'H, 10',
    'A, 12',
    'I, 5',
    'N, 8',
    'O, 0',
    'S, 6'
];

solve(arr);