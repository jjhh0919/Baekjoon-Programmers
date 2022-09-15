function solution(n)
{
    const array = n.toString().split('').map((x)=>parseInt(x));
    return array.reduce((a,c)=>a+c)
}