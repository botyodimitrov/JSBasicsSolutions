function solve(arr) {
    var courses = {};
    arr.forEach(function(entry) {
            var splitted = entry.split(/[\-\:]/);
            var name = splitted[0].trim();
            var language = splitted[1].trim();
            var result = Number(splitted[2].trim());

            if (result >= 0 && result <= 400) {
                if (!courses[language]) { //ако няма такъв елемент се създава и се добавя обект
                    courses[language] = [];
                    courses[language].push(
                        {
                            name: name,
                            result: result,
                            makeUpExams: 0
                        }
                    )
                }
                else {
                    var personFound = courses[language].filter(function (person) { //ако има същия човек
                        return name === person.name;
                    });
                    if (personFound.length !== 0) {
                        personFound[0].makeUpExams += 1;
                        if (result > personFound[0].result) {
                            personFound[0].result = result;
                        }
                    } else {             //ако човека съществува, тогава добавя
                        courses[language].push({
                            name: name,
                            result: result,
                            makeUpExams: 0
                        })
                    }
                }
            }
        }
    );

    for (var i in courses) {
        courses[i] = courses[i].sort(function(p1, p2) {
            if (p1.result != p2.result) {
                return p2.result - p1.result;
            } else {
                if (p1.makeUpExams !== p2.makeUpExams) {
                    return p1.makeUpExams - p2.makeUpExams;
                } else {
                    return p1.name.localeCompare(p2.name);
                }
            }
        })
    }

    console.log(JSON.stringify(courses));
}

var arr = [
    'Peter Jackson - Java : 350',
    'Jane - JavaScript : 200',
    'Simon Cowell - Java : 100',
    'Simon Cowell - JavaScript : 100',
    'Jane     -    JavaScript :     400',
    'Simon Cowell     -    JavaScript :     400',
    'Simon Cowell     -    JavaScript :     100',
    'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Simon Cowell - PHP : 200'
];
solve(arr);
