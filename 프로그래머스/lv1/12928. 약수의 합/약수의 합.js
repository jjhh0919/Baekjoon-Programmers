function solution(n) {
    const array = [];
    if (!n) {
        return 0;
    }
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            array.push(i);
        }
    }
    return array.reduce((a, c) => a + c);
}