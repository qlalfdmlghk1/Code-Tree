const fs = require("fs")
let [str1,str2] = fs.readFileSync(0).toString().trim().split("\n")

for (let i = 0; i < str1.length - str2.length + 1; i++) {
    if (str1[i] === str2[0]) {
        let flag = true;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i+j] === str2[j]) continue;
            else {
                flag = false;
                break;
            }
        }
        if (flag) {
            str1 = str1.slice(0,i) + str1.slice(i+str2.length);
            i = -1;
            continue
        }
    }
}

console.log(str1)