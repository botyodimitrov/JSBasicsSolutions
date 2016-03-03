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
    var values = [];
    var arrDuplicate = [];

    arr.forEach(function(line) {

        var splitted = line.split('?');
        splitted = splitted.map(function(piece) {
            if (piece.indexOf('=') !== -1) return piece;
        });

        splitted = _.compact(splitted);

        var pairs = splitted.map(function(item) {
            item = item.replace((/\+|(%20)/g), ' ');
            item = item.replace((/\s+/g), ' ');
            item = item.split('&');
            item = item.map(function(couples) {
                couples = couples.split('=');
                couples = couples.map(function(value) {
                    return value.trim();
                });
                return couples;
            });
            return item;
        });
        pairs = _.flatten(pairs, true);

        arrDuplicate.push(pairs);
    });

    var pair = [];
    var counter = 0;
    arrDuplicate.forEach(function(line) {
        keys.push([]);
        values.push([]);
        line.forEach(function(couples) {
            pair = couples.slice();
            var key = pair.shift();
            var indexOfKeyCurLine = keys[counter].indexOf(key);
            if (keys[counter].indexOf(key) === -1) {
                keys[counter].push(key);
                values[counter].push(pair);
            } else {
                values[counter][indexOfKeyCurLine].push(pair[0]);
            }
        });
        counter ++;
    });

    counter = 0;
    keys.forEach(function(line) {
        var output = '';
        var counter2 = 0;
        line.forEach(function(key) {
            output = output.concat(key);
            output = output.concat('=');
            output = output.concat('[' + values[counter][counter2].join(', ') + ']');
            counter2 ++;
        });
       console.log(output);

        counter ++;
    });
}
var _ = require('underscore');
var arr = [
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
];
solve(arr);