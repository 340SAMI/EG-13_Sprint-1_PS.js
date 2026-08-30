function reversestring(str){
    const length = str.length;
    const reverse = [];
    let val=0;
    for(let i = length-1; i>=0; i--){
        reverse[val]= str[i];
        val++;
    }
    return(reverse.join(""))
}

console.log(reversestring("hirobiyashi"))

function findMax(arr){
    let n = 0;
    for(let i=0; i<=arr.length; i++){
        if(arr[i]> n){
            n = arr[i]
        }
    }

    return n
}

console.log(findMax([4,5,3,2,11]))


function isPalindrone(pal){
    const reverse = reversestring(pal)
    let isPalindrone = false
    for(let i=0; i<=pal.length; i++){
        if(pal.codePointAt(i)!==reverse.codePointAt(i)){
            return isPalindrone;
        }

        isPalindrone = true
    }

    return isPalindrone;
}

console.log(isPalindrone("MAJOR"))

function sumArray(sums){
    let container = 0;
    for(let sum of sums){

        container = container + sum;
    }

    return container;
}

console.log(sumArray([1,2,3,4,5,6,7,8,9,10]))

function countVowel(strs){
    const vowels = "AEIOUaeiou"
    let vowelCount=0
    for(let str of strs){
       if(vowels.includes(str)){
        vowelCount++;
       }
    }

    return vowelCount;
}

console.log("the vowels are:",countVowel("WASSAP"))

function flattenArray(arrs){
    let newArray =  []
   
    arrs.map((arr)=>{
           
        if(!Array.isArray(arr)){
           
            newArray.push(arr)
        }else{

            newArray.push(...flattenArray(arr));
        }
        
    })

    

    return newArray
}

console.log(flattenArray([3,5,6,2,[22,4,[42,7,20],5,6],64,3]))


function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        
        const sortedKey = str.split('').sort().join('');
      
        if (!map.has(sortedKey)) {
            map.set(sortedKey, []);
        }
        
     
        map.get(sortedKey).push(str);
    }

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))


function lengthOfLongestSubstring(s) {
    const seen = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        
  
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcdefbdcdgr"))


function deepClone(obj) {
    
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}


console.log(deepClone({ a: 1, b: { c: 2 } }))