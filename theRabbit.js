function solve(arr) {
    var directions = arr.shift().split(',');
    directions = directions.map(function(dir) {
        return dir.trim();
    });
    var matrix = arr.map(function(row) {
        row = row.split(',');
        row = row.map(function(cell) {
            return cell.trim();
        });
        return row;
    });
    var position = [0, 0];
    var lettuce = 0, //&
        cabbage = 0, //*
        turnip = 0, //#
        carrots = 0; //!
    var wallHits = 0;
    var visitedCells = [];

    for (var row = 0; row < matrix.length; row++) {
        var obj = matrix[row];
        for (var col = 0; col < matrix[row].length; col++) {
            var obj1 = matrix[col];

        }

    }

    directions.forEach(function(move) {
        if (move === 'right') position[0] ++;
        else if (move === 'left') position[0] --;
        else if (move === 'up') position[1] --;
        else if (move === 'down') position[1] ++;

        if (position[0] < 0) {position[0]++; wallHits++;}
        else if (position[0] > matrix[0].length-1) {position[0]--; wallHits++}
        if (position[1] < 0) {position[1] ++; wallHits++}
        else if (position[1] > matrix.length-1) {position[1] --; wallHits++}

        var x = position[0],
            y = position[1];

        var timesL = matrix[y][x].match((/\{\&\}/g)),
            timesC = matrix[y][x].match((/\{\*\}/g)),
            timesT = matrix[y][x].match((/\{\#\}/g)),
            timesCa = matrix[y][x].match((/\{\!\}/g));

        //  if(timesL || timesC || timesT || timesCa) {

        if (timesL) {matrix[y][x] = matrix[y][x].replace((/\{\&\}/g), '@'); lettuce += timesL.length;}
        if (timesC) {matrix[y][x] = matrix[y][x].replace((/\{\*\}/g), '@'); cabbage += timesC.length;}
        if (timesT) {matrix[y][x] = matrix[y][x].replace((/\{\#\}/g), '@'); turnip += timesT.length;}
        if (timesCa) {matrix[y][x] = matrix[y][x].replace((/\{\!\}/g), '@'); carrots += timesCa.length;}//}

        var cellBuffer = matrix[0][0];
    //    console.log(cellBuffer);
        // if (!(x === 0 && y ===0))
        if (cellBuffer !== matrix[y][x])
        visitedCells.push(matrix[y][x]);
        cellBuffer = matrix[y][x];
    });
    //  visitedCells

    var obj = {
        '&' : lettuce,
        '*' : cabbage,
        '#' : turnip,
        '!' : carrots,
        'wall hits' : wallHits
    };
    console.log(JSON.stringify(obj));
    if (visitedCells.length) console.log(visitedCells.join('|'));
    else console.log('No');
}

var arr = [
    'right, up, up, down',
    'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
    'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
    'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'
];
//var arr = [
//    'up, right, left, down',
//    'as{!}xnk'
//];

//var arr = [
//    'right',
//    'qwekjs, asd{#}a',
//    'qwekjs, asd{#}a'
//];
//var arr = [
//    'right, right, down, left, left, down, right, right, down, left',
//    'qwekjs, asd{#}a, mxz{#}{*}',
//    'qwekjs, asd{#}a, xnc{&}a',
//    'qwekjs, asd{#}a, xnc{&}a',
//    'qwekjs, asd{#}a, xnc{&}a'
//];
solve(arr);