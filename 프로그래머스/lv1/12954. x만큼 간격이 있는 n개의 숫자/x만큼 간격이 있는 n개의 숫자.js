function solution(x, n) {
    const answer = Array(n).fill(x).map((value,index) => value * (index+1));
    return answer;
}