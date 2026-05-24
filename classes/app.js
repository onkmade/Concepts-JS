// 5. Find the largest Number

function findMax(arr){
    let max = -Infinity;

    for(let num of arr){
        if(isGreater(num, max)) max = num;
    }

    function isGreater(num, max){
        return num > max;
    }

    return max;
}

// console.log(findMax([43, 34, 23, 54, 76, 1, 54,13,4]));


// ===========================
//  Username Formatter
// ===========================

const user1 = ["mahan", "Rohit", "aman"];

function formatUser(arr){
    let newArr = [];
    for(let name of arr){
        newArr.push(capitalize(name));
    }

    function capitalize(name){
        return name.toUpperCase()
    }

    return newArr;
}

// console.log(formatUser(user1));

// =========================
// Products
// =========================

const products = [
  { name: "Pen", category: "stationary" },
  { name: "Pencil", category: "stationary" },
  { name: "Shirt", category: "clothing" }
];

function countCategories(Products){

    let result = {};
    function addCategory(obj, category){
        if(category in obj){
            obj[category] += 1;
        } else {
            obj[category] = 1;
        }
    }

    for(let product of products){
        let category = product["category"];
        addCategory(result, category);
    }

    return result;
}

// console.log(countCategories(products));


/* ========================
Find First Matching Item
=========================== */
const firstabove = [33, 20, 15, 7, 13];
function findFirstAbove(arr, limit){


    function findMaxNums(arr, limit){
        let maxNumberArr = [];
        for(let num of arr){
            if(num > limit){
                maxNumberArr.push(num);
            } else {
                continue;
            }
        }
        return maxNumberArr;
    }

    let min = Infinity;
    for(let num of findMaxNums(arr, limit)){
        if( num < min){
            min = num;
        }
    }

    return min;

}


// console.log(findFirstAbove([100, 85, 30, 65, 15, 18, 28], 45));


// ================================
// FUnctions Callbacks
// ================================

// Synchronous
function doSomething(callback) {
  callback();
}

// Asynchronous
function doSomething(callback) {
  setTimeout(callback, 0);
}