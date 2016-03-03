function solve(arr) {
    var bill = Number(arr[0]);
    var mood = arr[1];
    var tip = 0;

    switch (mood) {
        case 'drunk':
            tip = 0.15 * bill;
            var power = Number(tip.toString()[0]);
            tip = Math.pow(0.15 * bill, power);
            break;
        case 'married': tip = bill * 0.0005;
            break;
        case 'happy': tip = bill * 0.1;
            break;
        default:  tip = 0.05 * bill;
            break;
    }
    console.log(tip.toFixed(2));
}

var arr = [
    '19841999.99',
    'drunk'
];

solve(arr);