function maxAVgsub(nums, k){
    let n = nums.length;
    if(!(k <= 1 || n >= k)) return;
    let sum = 0;

    for(let i = 0; i < n; i++){
        if(nums[i] > k){
            sum += nums[i];
        } else{
            let num = Math.abs(nums[i]);
            if(num > k){
                sum -= -nums[i];
            }
        }
    }

    return (sum/k);
}

console.log(maxAVgsub([5], 1));
console.log(maxAVgsub([1,12,-5,-6,50,3], 4));