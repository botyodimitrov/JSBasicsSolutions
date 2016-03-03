function solve(arr) {
    String.prototype.replaceAt = function(index, str) {
        var firstStr = this.substr(0, index);
        var lastStr = this.substr(index+1);
        return firstStr + str + lastStr;
    };

    var str = arr.splice(0, 1).join();
    var magicNumber = Number(arr.splice(0, 1));
    arr = arr.map(function(e) {
        return e.split(' ');
    });
    //arr.map(function(e) { // check why can t convert string to num
    //    e.map(function(s) {
    //        return Number(s);
    //    })
    //});

    function calculateSum(arr) { //внимавай с проверката. Ако i = k, и j = l, гърми!
        var sum;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                var pickedNum = Number(arr[i][j]);
                for (var k = 0; k < arr.length; k++) {
                    for (var l = 0; l < arr[k].length; l++) {
                        var checkedNum = Number(arr[k][l]);
                        var checkSum = pickedNum + checkedNum;
                       // console.log(checkSum);
                        if (checkSum === magicNumber) {
                        if(!(i===j && k===l)) { //-----------


                               // console.log('asd');
                                return sum = i + j + k + l; //break----------

                            }
                        }
                    }
                }
            }
        }
    }
    var sum = calculateSum(arr);
   // console.log(sum);

    var result = '';
    for(var m = 0; m < str.length; m++) {
        var code = str.charCodeAt(m);
        //console.log(code);
        if (m % 2 === 0) {
            code += sum;
        } else if(m % 2 !== 0) {
            code -= sum;
        }
        //console.log(code);
        result = result.concat(String.fromCharCode(code));
    }
    console.log(result);
}

//var arr =
//    ['QqdvSpg',
//        '400',
//        '100 200 120',
//        '120 300 310',
//        '150 290 370'];

//var arr = [
//'>scsimh$deo$]$^mnxdh]}',
//'400',
//'200 100 120',
//'120 102 300',
//'150 290 370'];


//гърми
//var arr =  ['EfqfNhmnkynn%`fn~',
//    '100',
//    '200 100 120 300',
//    '100 90 300 100',
//    '150 290 370 100',
//    '10 11 100 100'];

//гърми
//var arr =
//    ['Usq$krh}peza$kr_i',
//'10',
//'200 100 120 300',
//'100 9 300 100',
//'1 290 370 100',
//'10 11 100 100'];

//var arr = [
//"Mll{bu`'\v]l",
//'900',
//'200 350 120 300',
//'100 9 300 100',
//'1 290 370 100',
//'10 11 100 550'];

//гърми
var arr =
['Vi`ujr!sihtudts',
'0',
'0 0 120 300',
'100 9 300 100',
'1 290 370 100',
'10 11 100 550'];

//гърми
//var arr =
//['*<&*)@&*=kdtW',
//'999',
//'100 100 120 300 100',
//'100 900 300 100 100',
//'100 290 370 333 100',
//'100 110 666 550 100',
//'100 110 100 550 100'];



solve(arr);

