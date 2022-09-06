function solution(phone_number) {
    let answer = '';
    answer += '*'.repeat(phone_number.length-4)
    answer += phone_number.split('').splice(phone_number.length-4, 4).join('');
    
    return answer;
}