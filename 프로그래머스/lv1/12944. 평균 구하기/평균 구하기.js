function solution(arr) {
    let sum = 0;
    for (let index of arr){
        sum += index
    }
    let answer = sum / arr.length;
    return answer;
}