// Sum Zero O(n²) Space O(1)

// Write your solution below:
let findZero = (nums) => {
    
    let result = "False"
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === 0) {
                    result = "True"
                } 
            }
        }
    }
    console.log(result)
}
let nums = [12, 34, 10, -20, 67, 1]

findZero(nums)

//Unique Characters O(n) Space O(1)

let uniqueChars = (string) => {
    for (let i=0; i<string.length; i++) {
      if ( string.indexOf(string[i]) !== string.lastIndexOf(string[i]) ) {
        return false; // repeats
      }
    }
  return true;
}

let f = uniqueChars('Monday')
console.log(f)

//Pangram Sentence O(1) Space O(1)

function isPangram(string) {
    var regex = /([a-z])(?!.*\1)/g;
    return (string.match(regex) || []).length === 26;
}

//Longest Word O(n) Space O(1)

let findLongestWord = (array) => Math.max(...(array.map(el => el.length)));

findLongestWord(["hi", "hello"]);