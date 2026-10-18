const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.
function checkYoonYear(n) {
    if (n % 4 === 0) {
        if (n % 100 === 0) {
            if (n % 400 === 0) return true;
            else return false;
        }
        return true;
    }
    return false;
}

function isTrueDay(y,m,d) {
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        if (d <= 31) return true;
        else return false;
    }
    else if (m === 4 || m === 6 || m === 9 || m === 11) {
        if (d <= 30) return true;
        else return false;
    }
    else if (m === 2) {
        if (checkYoonYear(y)) {
            if (d <= 29) return true;
            else return false;
        }
        else {
            if (d <= 28) return true;
            else return false;
        }
    }
    else return false;
}

function getSeason(m) {
    if (m >= 3 && m <= 5) return "Spring"
    else if (m >= 6 && m <= 8) return "Summer"
    else if (m >= 9 && m <= 11) return "Fall"
    else return "Winter"
}

if (isTrueDay(year, month, day)) {
    console.log(getSeason(month))
}
else console.log(-1)