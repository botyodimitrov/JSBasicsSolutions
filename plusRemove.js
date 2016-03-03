function solve(arr) {
    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    };
    arr.forEach(function(str) {
        console.log(str);
    });
    for (var i = 0; i < arr.length - 2; i++) {
        var currentStr = arr[i];
        var nextString = arr[i + 1];
        var futureString = arr[i + 2];
        for (var j = 1; j < currentStr.length; j++) {
            var char = currentStr[j].toString().toLowerCase();

            if (nextString[j+1] && futureString[j]) {

            var left = nextString[j - 1].toString().toLowerCase();
            var right = nextString[j + 1].toString().toLowerCase();
            var down = nextString[j].toString().toLowerCase();
            var further = futureString[j].toString().toLowerCase();

                if (
                    (char === left || left === ' ')
                    && (char === down || down === ' ')
                    && (char === right || right === ' ')
                    && (char === further || further === ' ')
                )
                {
                    console.log(char);
                    arr[i] = arr[i].replaceAt(j, ' ');
                    arr[i + 1] = arr[i + 1].replaceAt(j - 1, ' ');
                    arr[i + 1] = arr[i + 1].replaceAt(j, ' ');
                    arr[i + 1] = arr[i + 1].replaceAt(j + 1, ' ');
                    arr[i + 2] = arr[i + 2].replaceAt(j, ' ');
                }
            }
        }
    }
    arr.forEach(function(line) {
        console.log(line);
    });

    arr = arr.map(function(str) {
        return str.split(/\s+/g).join('');
    });
    arr.forEach(function(line) {
        console.log(line);
    });
}

var arr =
    [
        '888**t*',
        '8888ttt',
        '888ttt<<',
        '*8*0t>>hi'
    ];

solve(arr);


//String.prototype.replaceAt=function(index, character) {
//    return this.substr(0, index) + character + this.substr(index+character.length);
//};
//var str = 'sdadasd ada';
//
//str = str.replaceAt(4, 'H');
//console.log(str);
