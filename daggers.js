function solve(arr) {
    var blades = [];
    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    arr.forEach(function(bl) {
        var length = Math.floor(Number(bl));
        var type = '';
        if (Number(bl) > 40) type = 'sword'; else type = 'dagger';
        var application = '';
        switch (length%5) {
            case 0: application = '*rap-poker'; break;
            case 1: application = 'blade'; break;
            case 2: application = 'quite a blade'; break;
            case 3: application = 'pants-scraper'; break;
            case 4: application = 'frog-butcher'; break;
        }
      if(!(length <= 10))  console.log('<tr><td>' + length + '</td><td>' + type + '</td><td>' + application + '</td></tr>');
    });
    console.log('</tbody>');
    console.log('</table>');
}

var arr = [ '17.8', '19.4', '13', '55.8', '126.96541651', '3' ];
var arr = [ '42',
    '43',
    '44']

solve(arr);