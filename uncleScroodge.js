function solve(arr) {
    var validBag = [];

    arr.forEach(function(str) {
        var splitted = str.split(' ');
        var type = splitted[0].trim(),
            value = Number(splitted[1].trim());

        if(type.toLowerCase() === 'coin')
            if(value % 1 === 0 && value > 0)
                validBag.push(value);
    });

    var amount = _.reduce(validBag, function(num, memo) {
        return num + memo;
    });

    var gold = 0,
        silver = 0,
        bronze = 0;

    if (amount) {
        gold = Math.floor(amount / 100);
        silver = Math.floor((amount % 100) / 10);
        bronze = Math.floor((amount % 100) % 10);
    }
   // console.log(validBag);
    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + bronze);

}
var _ = require('underscore');
var arr = ['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1'];
solve(arr);