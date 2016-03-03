function solve(arr) {
    //String.prototype.replaceAt=function(index, character) {
    //    return this.substr(0, index) + character + this.substr(index+character.length);
    //};

    String.prototype.replaceAt = function(index, str) {
        var firstStr = this.substr(0, index);
        var lastStr = this.substr(index+1);
        return firstStr + str + lastStr;
    };

    arr = arr.map(function(str) {
        if (str.substring(0, 4) !== 'url=') {
            str = str.replace(/[\+/\_]|(%20)/g, ' ');
            return str.split('?');
        } else {
            return str;
        }});
    arr = _.flatten(arr);

    arr = arr.map(function(str) {
        if(str.indexOf('=') > -1)
            return str.split('&');
    });

    arr = _.compact(arr);

    arr = arr.map(function(line) {
        return line.map(function(el) {
            el = el.trim();
            el = el.split('=');
            return el.map(function(key) {
                key = key.trim();
                return key.replace(/\s+/g, ' ');
            })
        });
        //return _.groupBy(line, function(el) {
        //   return el[0];
        //});
    });

    console.log(arr);

var list = [];
    arr.forEach(function(line) {
        line.forEach(function(group) {

        })

        //list.push([]);
        //if (list.)
    });


    arr.forEach(function(line) {
        console.log(line);
    });
    //console.log(arr);
}

var _ = require('underscore');

var arr = [
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
];

solve(arr);