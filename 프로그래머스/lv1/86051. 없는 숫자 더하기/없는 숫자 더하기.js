function solution(numbers) {
    if(numbers.length>=1 && numbers.length<=9){
        let sum =0;
        const numbersArray = Array(10).fill(0).map((value,input)=>input);
        for (let number of numbersArray){
            if(!numbers.includes(number)){
                sum+=number
            }
        }
        return sum;
    }
}