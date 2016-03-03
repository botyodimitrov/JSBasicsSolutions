function solve(arr) {
    var calculated = [];

    arr.forEach(function(str) {
        var splitted = str.split(' ');
        var carType = splitted[0].trim();
        var fuelType = splitted[1].trim();
        var routeType = Number(splitted[2].trim());
        var luggageWeight = Number(splitted[3].trim());
       // console.log(carType, fuelType, routeType, luggageWeight);
        var len = 0;
        var snowyRoad = 0;
        var baseConsumption = 10;

        if (routeType == 1) {
            len = 110;
            snowyRoad = 10;
        } else if (routeType == 2) {
            len = 95;
            snowyRoad = 30;
        }

        if(fuelType === 'diesel') {
            baseConsumption = 8;
        } else if (fuelType === 'gas') {
            baseConsumption = 12;
        } else if (fuelType === 'pertrol') {
            baseConsumption = 10;
        }
       // console.log(snowyRoad);
        var extraLuggageConsumption = baseConsumption + luggageWeight/100;
       // console.log(extraLuggageConsumption);
        var totalConsumption = len * (extraLuggageConsumption/100);
       // console.log(totalConsumption);
        var extraSnowConsumption = extraLuggageConsumption * 0.3;
        //console.log(extraSnowConsumption);
        var plusSnowConsumption =Math.round(totalConsumption + (extraSnowConsumption/100) * snowyRoad);

        calculated.push([carType, fuelType, routeType, plusSnowConsumption].join(' '));

       // console.log(Math.round(plusSnowConsumption));
    });
 calculated.forEach(function(e) {
     console.log(e);
 });

}

var arr = [
    'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'
];

solve(arr);
