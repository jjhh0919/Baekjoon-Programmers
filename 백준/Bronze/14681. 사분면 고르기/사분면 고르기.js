const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const [x, y] = input;

const answer = (x, y) => {
    if ((x > 0) &&(y >0)){
        return 1;
    }
    else if ((x < 0) && (y > 0)){
        return 2;
    }
    else if ((x < 0) && (y < 0)){
        return 3;
    }
    else {
        return 4;
    }
}

console.log(answer(x, y));