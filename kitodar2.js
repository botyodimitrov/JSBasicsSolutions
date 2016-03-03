 var _ = require('underscore');

function solve(arr) {
    var res = [];
    for(var i = arr.length -1 ; i >= 0; i--) {
        if(arr[i].indexOf('-') > -1) res.push(arr[i].split('-'));
        else arr.splice(i, 1);
    }

    res = _.flatten(res);
    var pure = [];
    for(var j = res.length-1; j >= 0; j--) {
        if(j % 2 === 0) {
            res.splice(j, 1);
            pure.push(res[j].split(':'));}
    }

    var
        silver = 0,
        gold = 0,
        diamonds = 0;

    for(var k = 0; k < pure.length; k++) {
        for(var l = 0; l < pure[k].length; l++) {
            pure[k][l] = pure[k][l].trim();
        }
        if(pure[k][0].toLocaleLowerCase() === 'gold') {
            gold += Number(pure[k][1]);
        } else if (pure[k][0].toLocaleLowerCase() === 'silver') {
            silver += Number(pure[k][1]);
        } else if (pure[k][0].toLocaleLowerCase() === 'diamonds') {
            diamonds += Number(pure[k][1]);
        }
    }
    console.log("*Silver: " + silver);
    console.log("*Gold: " + gold);
    console.log("*Diamonds: " + diamonds);
}

//var arr = [ 'mine bobovDol - gold : 10',
//    'mine medenRudnik - silver : 22',
//    'mine chernoMore - shrimps : 24',
//    'gold:50' ];


var arr = [
'mine mina - gold - 5',
'mina - silver - 5',
'mina - diamonds : 5',
'mina - gold:5'];

solve(arr);


 //pure.forEach(function(e) {
 //    e.forEach(function(s) {
 //        return s.trim();
 //    });
 //});