function solve(arr) {
    var regex = (/<p>([\w\W]+?)<\/p>/g);
    var strings = arr[0].match(regex);
    var strArray = [];

    strings.forEach(function(str) {
      //  console.log(str.length);
        strArray.push(str.substring(3, str.length-4));
       // console.log(str.length);
    });
    //console.log(strArray);

    for (var i = 0; i < strArray.length; i++) {
        var str = strArray[i];
        var strNew = '';
        for (var j = 0; j < str.length; j++) {
            var code = str.charCodeAt(j);
            var strLet = str[j];

            if (code < 48 || (code < 97 && code > 57) || code > 122) {
                strNew = strNew.concat(' ');
                //strArray[i] = strArray[i].replace(str[j], ' ');
            } else if (code >= 48 && code <= 57) {
                strNew =  strNew.concat(String.fromCharCode(code));
            } else if (code >= 97 && code <= 109) {
                code = code + 13;
                strNew =  strNew.concat(String.fromCharCode(code));
                // strArray[i][j] = String.fromCharCode(code);
            } else if (code <= 122 && code >= 110) {
                code = code - 13;
                strNew =  strNew.concat(String.fromCharCode(code));
                // strArray[i][j] = String.fromCharCode(code);
                //strArray[i] = strArray[i].replace(str[j], String.fromCharCode(code));
            }
        }
        strArray[i] = strNew;
    }

    strArray = strArray.join('');
    var regEmpty = (/\s+/g);
    strArray = strArray.replace(regEmpty, ' ');


    console.log(strArray);

}
var _ = require('underscore');

//var arr = ["<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>"
//];
//
//var arr = [
//    "<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>"
//];

var arr =
[
    "<html><head><title></title></head><body><p>Intro</p><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg%^&%^&^%&^))))()%^&%^&^%&^))))()%^&%^&^%&^))))() fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati %^&%^&^%&^))))()wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre %^&%^&^%&^))))()%^&%^&^%&^))))()fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p><p>it is frustrating that you have not put car chains yet... embarrassing...</p><p>orsber lbh ernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p><span>it is not that fun making tests sometimes, onlysometimes :)</span></body>"
];

var arr =

[
    "<html><head><p>blahblahbla%^&%%^&%%^&%%^&%hblah</p></head><body><p>Intro</p><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg%^&%^&^%&^))))()%^&%^&^%&^))))()%^&%^&^%&^))))() fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati %^&%^&^%&^))))()wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre %^&%^&^%&^))))()%^&%^&^%&^))))()fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p><p>it is frustrating that you have not put car chains yet... embarrassing...</p><p>orsber jvyy znxr lbhe yvsr jnl rnfvre</p><span>it is not that fun making tests sometimes, onlysometimes :)</span></body>"
];
solve(arr);

//97 - 122, 48 - 57
//if (charCodeAt(i)< 48 || (charCodeAt(i)< 97 && charCodeAt(i) > 57) || charCodeAt(i)> 122) str[i] = ' ';
// str = split.str(' ');
// str = str.join(' ');


// strArray = _.flatten(strArray.map(function(s) {
//    return s.split('');
// }));


//strArray = _.reduce(strArray, function(a, b) {
//    if(a === ' ' && b === ' ') a = '';
//    //else
//}, []);

//strArray[0] = strArray[0].split('');

//strArray = _.flatten(strArray.map(function(s) {
//    s = s.split(' ');
//    return s.filter(function(e) {
//        if (e !== '') {
//            return e;
//        }
//    })
//}));
//strArray = strArray.join(' ');