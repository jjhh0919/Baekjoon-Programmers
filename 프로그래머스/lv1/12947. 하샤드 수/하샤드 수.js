function solution(x) {
    let answer = true;
    const input = x.toString();
    let sum = 0;
    for(let index of input){
        sum += parseInt(index);
    }
    x % sum ? answer = false : answer = true;
    return answer;
}