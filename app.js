const arr8 = [2, 6, 7, 8, 10];
let findValue = arr8.find( function(e) {return e === 6});
let findValue2 = arr8.find( e => e === 10);
console.log(findValue, findValue2);