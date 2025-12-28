function rollDice(sides){
    const side = Math.ceil(Math.random() * sides);
    return console.log(side) ;
}

rollDice(6);