function leapyear(x){
    const year = x;

    if(x%4===0 && x%100!==0){
        console.log(x,"is a leapyear")
    }else if (x%400===0) {
        console.log(x,"is a leapyear")
    } else {
        console.log(x,"is not a leapyear")
    }
}

leapyear(2024);


function generateFibonacci(n){
    const container = [];
    let val =0;
    for(let i=0; i<=n; i++){
        container[i]=val;
        if(i===0){
            val = container[i] + 1;
        }else{
            val = container[i]+ container[i-1]
        }
    }

    console.log("The Fibonacci Array is:",container);
}

generateFibonacci(7);


function findGCD(a,b){

    a = Math.round(Math.abs(a));
    b = Math.round(Math.abs(b));

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        console.error("Inputs must be real numbers.");
        return null;
    }
    let remainder = 0;
    while(b!==0){
        remainder = a%b;
        a=b;
        b=remainder;

    }
    return a;
}

console.log("the GCD is:", findGCD(48,18))


function findLCM(a,b){

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        console.log("Inputs must be a number and finite");
        return null;
    }

    if (a === 0 || b === 0) return 0;

    const LCM = Math.abs(a*b)/findGCD(a,b)

    

     return LCM;


}

console.log("the LCM is:",findLCM(12,18))


function isPrime(n){
    if(n <= 1) return false;
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    
    for(let i = 3; i * i <= n; i += 2){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log("is it a prime?", isPrime(29));


function mergeSortedArrays(arr1, arr2){
    let result = [];
    let i = 0, j = 0;
    
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}

console.log("Merged arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));



function findMedian(nums){
    const sorted = nums.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    if(sorted.length % 2 === 0){
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

console.log("Median:", findMedian([7, 1, 3, 4, 9]));



function findSecondLargest(nums){
    if(nums.length < 2) return null;
    
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let num of nums){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        } else if(num > secondLargest && num !== largest){
            secondLargest = num;
        }
    }
    
    return secondLargest === -Infinity ? null : secondLargest;
}

console.log("Second Largest:", findSecondLargest([10, 20, 4, 45, 99, 99]));



function findMode(arr){
    const frequency = {};
    let maxCount = 0;
    let mode = null;
    
    for(let num of arr){
        frequency[num] = (frequency[num] || 0) + 1;
        if(frequency[num] > maxCount){
            maxCount = frequency[num];
            mode = num;
        }
    }
    
    return mode;
}

console.log("Mode:", findMode([1, 3, 3, 2, 1, 3, 4]));



function naturalSort(arr){
    return arr.sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
}

console.log("Natural Sort:", naturalSort(["file10.txt", "file2.txt", "file1.txt"]));

 