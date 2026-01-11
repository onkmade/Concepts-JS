function numRandom(){
    const numbers = [];
    for(let i=0; i<10; i++){
        const num = Math.floor(Math.random() * 50);
        numbers.push(num);
    }
    return numbers;
}

const result = numRandom();
console.log(result);
console.log(result.filter(num => num > 10));