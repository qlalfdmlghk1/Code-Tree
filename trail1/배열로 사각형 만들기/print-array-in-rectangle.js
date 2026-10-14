let arr = Array(5).fill(1).map(() => Array(5).fill(1))

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 0 || j === 0) {
            arr[i][j] = 1
        }
        else {
            arr[i][j] = arr[i-1][j] + arr[i][j-1]
        }
    }
}

for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j < 5; j++) {
        row += arr[i][j] + " "
    }
    console.log(row)
}