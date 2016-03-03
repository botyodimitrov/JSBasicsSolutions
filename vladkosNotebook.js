function solve(arr) {
    Array.prototype.occurs = function(arg){
        var counter = 0;
        for(var i = 0; i< this.length; i++){
            if(this[i] == arg)
                counter++;
        }
        return counter;
    };

    var keys = [];
    var list = [];

    arr.sort(function(line1, line2) {
        return line1.toLowerCase().localeCompare(line2.toLowerCase());
    })    ;
    arr.forEach(function(sheet) {
        sheet = sheet.split('|');
        var color = sheet.shift();
        var
            age = 0,
            opponent = '',
            name = '',
            rank = 0,
            wins = 0,
            losses = 0;

        if (sheet[0] === 'name') name = sheet[1];
        if (sheet[0] === 'age') age = sheet[1];
        if (sheet[0] === 'win' || sheet[0] === 'loss') {
            opponent = sheet[1];
            if (sheet[0] === 'win') wins ++;
            if (sheet[0] === 'loss') losses ++;
        }
        rank = (wins + 1) / (losses + 1);

        if (!keys.occurs(color)) {
            keys.push(color);

            list.push( {
                age: age,
                name: name,
                opponents: [opponent],
                rank: rank,
                wins: wins,
                losses: losses
            });
        } else {
            var currentColor = list[keys.indexOf(color)];
            if (age) currentColor.age = age;
            if (name) currentColor.name = name;
            if (opponent) currentColor.opponents.push(opponent);
            if (wins) currentColor.wins ++;
            if (losses) currentColor.losses ++;
            currentColor.rank = ((currentColor.wins + 1) / (currentColor.losses + 1)).toFixed(2);
        }
    });

    for (var i = keys.length - 1; i >= 0; i--) {
        if (!list[i].name || !list[i].age) {
            list.splice(i, 1);
            keys.splice(i, 1);
        }
        if (list[i]) {
            list[i].opponents = _.compact(list[i].opponents);
            list[i].opponents.sort(
                //function(o1 ,o2) {
                //return o1.localeCompare(o2);
            //}
    );
            delete list[i].wins;
            delete list[i].losses;
        }
    }

    var data = _.object(keys, list);
    console.log(JSON.stringify(data));
}

var _ = require('underscore');

var arr = [
    'purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
];
var arr = [
'red|name|kiko',
'red|win|Vladko',
'blue|age|12',
'green|age|13',
'green|win|gosho',
'red|age|12',
'green|name|Pesho',
'green|win|ico',
'green|win|Gosho',
'green|win|qfkata',
'green|win|stamat',
'green|win|petko',
'green|win|mariya'
];

solve(arr);
var str =
{
    "purple":
    {
        "age":"99",
        "name":"VladoKaramfilov",
        "opponents":["Kiko","Kiko","Kiko","Manov","Manov","Yana","Yana","Yana"],
        "rank":"0.11"
    },
    "red":
    {
        "age":"44",
        "name":"gosho",
        "opponents":[],
        "rank":"1.00"
    }
};