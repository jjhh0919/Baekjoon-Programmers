function solution(a, b) {
    const num1 = Math.min(a, b);
    const num2 = Math.max(a, b);
    
    let sum = 0;
    
    if (num1 === num2) {
        return num1;
    }
    
    for (let i = num1; i <= num2; i++) {
        sum += i
    }
    return sum;
}