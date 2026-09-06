var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

console.log("01. Contains Duplicate:", containsDuplicate([1, 2, 3, 1]));

var moveZeroes = function(nums) {
    let nextNonZero = 0;

    for (const num of nums) {
        if (num !== 0) {
            nums[nextNonZero] = num;
            nextNonZero++;
        }
    }

    while (nextNonZero < nums.length) {
        nums[nextNonZero] = 0;
        nextNonZero++;
    }
};

const zeroesExample = [0, 1, 0, 3, 12];
moveZeroes(zeroesExample);
console.log("02. Move Zeroes:", zeroesExample);

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counts = new Map();
    for (const character of s) {
        counts.set(character, (counts.get(character) || 0) + 1);
    }

    for (const character of t) {
        const count = counts.get(character) || 0;
        if (count === 0) {
            return false;
        }
        counts.set(character, count - 1);
    }

    return true;
};

console.log("03. Valid Anagram:", isAnagram("anagram", "nagaram"));

var canConstruct = function(ransomNote, magazine) {
    const counts = new Map();
    for (const character of magazine) {
        counts.set(character, (counts.get(character) || 0) + 1);
    }

    for (const character of ransomNote) {
        const count = counts.get(character) || 0;
        if (count === 0) {
            return false;
        }
        counts.set(character, count - 1);
    }

    return true;
};

console.log("04. Ransom Note:", canConstruct("aa", "aab"));

var majorityElement = function(nums) {
    let candidate = null;
    let votes = 0;

    for (const num of nums) {
        if (votes === 0) {
            candidate = num;
        }
        votes += num === candidate ? 1 : -1;
    }

    return candidate;
};

console.log("05. Majority Element:", majorityElement([2, 2, 1, 1, 1, 2, 2]));

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
};

console.log("06. 3Sum:", threeSum([-1, 0, 1, 2, -1, -4]));

var subarraySum = function(nums, k) {
    const prefixCounts = new Map([[0, 1]]);
    let sum = 0;
    let total = 0;

    for (const num of nums) {
        sum += num;
        total += prefixCounts.get(sum - k) || 0;
        prefixCounts.set(sum, (prefixCounts.get(sum) || 0) + 1);
    }

    return total;
};

console.log("07. Subarray Sum Equals K:", subarraySum([1, 1, 1], 2));

var topKFrequent = function(nums, k) {
    const frequencies = new Map();
    for (const num of nums) {
        frequencies.set(num, (frequencies.get(num) || 0) + 1);
    }

    return [...frequencies.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => num);
};

    console.log("08. Top K Frequent Elements:", topKFrequent([1, 1, 1, 2, 2, 3], 2));

var longestConsecutive = function(nums) {
    const values = new Set(nums);
    let longest = 0;

    for (const num of values) {
        if (!values.has(num - 1)) {
            let current = num;
            while (values.has(current + 1)) {
                current++;
            }
            longest = Math.max(longest, current - num + 1);
        }
    }

    return longest;
};

console.log("09. Longest Consecutive Sequence:", longestConsecutive([100, 4, 200, 1, 3, 2]));

var sortColors = function(nums) {
    let low = 0;
    let current = 0;
    let high = nums.length - 1;

    while (current <= high) {
        if (nums[current] === 0) {
            [nums[low], nums[current]] = [nums[current], nums[low]];
            low++;
            current++;
        } else if (nums[current] === 2) {
            [nums[current], nums[high]] = [nums[high], nums[current]];
            high--;
        } else {
            current++;
        }
    }
};

const colorsExample = [2, 0, 2, 1, 1, 0];
sortColors(colorsExample);
console.log("10. Sort Colors:", colorsExample);
