function solve(arr) {
    var position = arr[0].indexOf('o');
    var counterRow = 0;
    arr.forEach(function(row) {
        var moveLeft = 0;
        var  moveRight = 0;

        if(row.match(/</g)) {
            moveLeft = row.match(/</g).length;
        }
        if(row.match(/>/g)) {
            moveRight = row.match(/>/g).length;
        }
        var moveSum = moveRight - moveLeft;
        position += moveSum;
        counterRow ++;
        if (row[position] === '/' || row[position] === '') {
            console.log( "Got smacked on the rock like a dog!");
            console.log((counterRow-1)  + ' ' + position);
            return 0;
        } else if (row[position] === '_') {
            console.log( "Landed on the ground like a boss!");
            console.log((counterRow-1)  + ' ' + position);
            return 0;
        } else if (row[position] === '~') {
            console.log( "Drowned in the water like a cat!");
            console.log((counterRow-1)  + ' ' + position);
            return 0;
        }
    });
}

//var arr = [
//    '--o----------------------',
//    '>------------------------',
//    '>------------------------',
//    '>-----------------/\-----',
//    '-----------------/--\----',
//    '>---------/\----/----\---',
//    '---------/--\--/------\--',
//    '<-------/----\/--------\-',
//    '\------/----------------\',
//    '-\____/------------------'
//];

var arr =
    [
        '------------o-<<--------',
        '------->>>>>------------',
        '--------------->-<---<--',
        '-----<<<<<-------/\\--<--',
        '-------------<--/-<\\----',
        '>--------/\\----/<-<-\---',
        '---------/<-\--/------\--',
        '-------/----\\/--------\\-',
        '------/--------------<-\\',
        '\\___~/------<-----------'];

solve(arr);