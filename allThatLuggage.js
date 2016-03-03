var _ = require('underscore');

function solve(arr) {
    var regex = (/\.*?\*\.*/g);
    var list = {};
    var mode = String(arr.splice(arr.length - 1, 1));

    arr = arr.map(function(str) {
        return str.split(regex);
    });
    arr.map(function(weight) {
        weight[5] = Number(weight[5]);
    });

    arr = _.groupBy(arr, function(s) {
        return s[0];
    });

    for (var key in arr) {

        (function () {
            arr[key].sort(function (a, b) {
                    if (mode === 'weight') {
                        return a[5] - b[5];
                    } else if (mode === 'luggage name') {
                        return a[1].localeCompare(b[1]);
                    }
                }
            )
        })();
    }
    var nArr = [];
    for (var key in arr) {
        nArr.push(arr[key]);
    };
    nArr = _.flatten(nArr, true);

    // console.log(arr);

    nArr.forEach(function(str) {
        var name = str[0];
        var luggageName = str[1];
        var weight = Number(str[5]);
        var fragile = ( 'true' === str[4]);
        var type = 'other';
        if(str[2] === 'true') {
            type = 'food';
        } else if (str[3] === 'true') {
            type ='drink';
        }
        var transferredWith = str[6];

        if(!list[name]) {
            list[name] = {};
            list[name][luggageName] =
            {
                kg: weight,
                fragile: fragile,
                type: type,
                transferredWith: transferredWith
            };

        } else {
            list[name][luggageName] =
            {
                kg: weight,
                fragile: fragile,
                type: type,
                transferredWith: transferredWith
            };
        }

    });

    list = JSON.stringify(list);
    console.log(list);
}

var arr = [
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'weight'
];

var arr = [
    'Yana Slavcheva.....*....clothes.........*........false.....*..........false...*..false.*.2.2.*.backpack',
    'Kiko....*....socks.*.....false.....*.false.*......false......*.0.2.*....backpack',
    'Kiko.*...banana.*.true.*.....false......*.false.*.3.2.*.backpack',
    'Kiko.*..sticks.*.false......*.false.*.false....*.1.6.*.ATV',
    'Kiko.*.....glasses.....*..false......*.false.*...true.....*.3.....*....ATV',
    'Manov..*.socks.*.false.*...false.*.false.*.0.3.*.ATV',
    'Manov.*...condoms..*.false....*.false.*.false.*.8.3.*.ATV',
    'Manov...*.....nuts.....*.true....*.false.*.false.*.2.2.*.backpack',
    'Manov.*....salami.*....true.*...false..*.false.*.....6.4.....*.....ATV',
    'Manov....*.steak....*.true.*....false...*.false.....*.5.8.*...ATV',
    'Manov...*.laptop...*....false....*....false.....*.true.*.....2.5.*.backpack',
    'Manov.*...rakiya....*..false...*.true.*.false.*.5.8.*.backpack',
    'weight'
];

solve(arr);

var rand =
{
    "Yana Slavcheva":
    {
        "clothes":
        {
            "kg":2.2,
            "fragile":false,
            "type":"other",
            "transferredWith":"backpack"
        }
    },
    "Kiko":
    {
        "socks":
        {
            "kg":0.2,
            "fragile":false,
            "type":"other",
            "transferredWith":"backpack"
        },
        "banana":
        {
            "kg":3.2,
            "fragile":false,
            "type":"food",
            "transferredWith":"backpack"
        },
        "sticks":
        {
            "kg":1.6,
            "fragile":false,
            "type":"other",
            "transferredWith":"ATV"
        },
        "glasses":
        {
            "kg":3,
            "fragile":true,
            "type":"other",
            "transferredWith":"ATV"
        }
    },
    "Manov":
    {
        "socks":
        {
            "kg":0.3,
            "fragile":false,
            "type":"other",
            "transferredWith":"ATV"
        }
    }
};

//if(!list[name]) {
//    list[name] = {};
//    list[name][luggageName] =
//    {
//        kg: weight,
//        fragile: fragile,
//        type: type,
//        transferredWith: transferredWith
//    };
//
//} else {
//    list[name][luggageName] =
//    {
//        kg: weight,
//        fragile: fragile,
//        type: type,
//        transferredWith: transferredWith
//    };
//}

//list.map(function(name) {
//    name.map(function(luggage) {
//        luggage.sort(function (l1, l2) {
//            if (mode === 'luggage name') {
//                return l1.localeCompare(l2);
//            } else if (mode === 'weight') {
//                return l1.weight - l2.weight;
//            }
//        })
//    })
//});