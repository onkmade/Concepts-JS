const numbers = [5, 12, 8, 20,3];
let count = 0;

numbers.forEach( num => {
    console.log(num*2);
    if( num > 10){
        count++;
    }
});


console.log(`Number greated than 10 are ${count}`);