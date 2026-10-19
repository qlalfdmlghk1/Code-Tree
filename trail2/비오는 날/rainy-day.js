const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.
class Forecast {
    constructor(date,day,weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

let arr = []

for (let forecast of forecasts) {
    if (forecast[2] === "Rain") arr.push(new Forecast(forecast[0],forecast[1],forecast[2]))
}

let fastIdx = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].date < arr[fastIdx].date) fastIdx = i;
}

console.log(arr[fastIdx].date, arr[fastIdx].day, arr[fastIdx].weather)