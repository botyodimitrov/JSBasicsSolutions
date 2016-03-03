function solve(arr) {
    arr.sort(function(line1, line2) {
        line1 = line1.split(' ');
        line1 = _.compact(line1);
        var ext1 = line1[1].trim();

        line2 = line2.split(' ');
        line2 = _.compact(line2);
        var ext2 = line2[1].trim();

        return ext1.localeCompare(ext2);
    });

    var
        extensions = [],
        names = [],
        memories =[];

    var counter = 0;
    arr.forEach(function(line) {
        line = line.split(' ');
        line = _.compact(line);
        var
            extension = line[1],
            name = line[0],
            memory = Number(line[2].trim().slice(0, -2));

        if (extensions.indexOf(extension) === -1) {
            extensions.push(extension);
            names.push([name]);
            memories.push([memory]);
        } else {
            names[extensions.indexOf(extension)].push(name);
            memories[extensions.indexOf(extension)].push(memory);
        }
        counter ++;
    });

    memories = memories.map(function(collection) {
        var sum = _.reduce(collection, function(num , memo) {
            return num + memo;
        });
        return sum.toFixed(2);
    });

    names = names.map(function(array) {
        return array.sort(function(name1, name2) {
            return name1.localeCompare(name2);
        });
    });

    var befObj = [];
    var counterTwo = 0;
    extensions.forEach(function(type) {
        befObj.push({
            files: names[counterTwo],
            memory: memories[counterTwo]
        });
        counterTwo ++;
    });
    extensions = _.object(extensions, befObj);
    console.log(JSON.stringify(extensions));
}


var _ = require('underscore');
var arr = [
    'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'
];
solve(arr);