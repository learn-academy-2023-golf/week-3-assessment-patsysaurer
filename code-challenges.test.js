// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciSequence", () => {
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
    const fibonacciLength1 = 6
    const fibonacciLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8]
    let result1 =  [1, 1, 2, 3, 5, 8]
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    let result2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciSequence(fibonacciLength1)).toEqual(result1)
    expect(fibonacciSequence(fibonacciLength2)).toEqual(result2)
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// - Create a function named fibonacciSequence
// - Input: number (length)
// - Output: array containing the Fibonacci Sequence
    // note: the length of the array is determined by the argument of the function
    // 1. Use a condtional to check for base cases
      // if length is less than 1 => empty array
      // if length is 1 or 2 => array with the first one or two Fibonacci nums
    // 2. Intialize the sequence array with the first two Fibonacci nums, 0 and 1
    // 3. Use a for loop to calculate and push the next value to the sequence until the desired length is reached. 
      // set the value to 2 
      // create a next value variable to set the sequence
      // return the sequence
  

    const fibonacciSequence = (num) => {
      if(num < 1){
        return [];
      } else if(num === 1) {
        return [0];
      } else if(num === 2){
        return [0, 1];
      }

      const sequence = [0, 1];
      for(let i = 2; i < num; i++){
        const nextValue = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextValue);
      }
      return sequence;
    }




// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sortMe", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    console.log("Line 41",studyMinutesWeek1)
    // Expected output: [15, 15, 20, 30, 30, 60, 90]

    let result1 = [15, 15, 20, 30, 30, 60, 90]
    
    expect(sortMe(studyMinutesWeek1)).toEqual(result1)

    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    let result2 = [10, 15, 20, 45, 60, 65, 100]
    expect(sortMe(studyMinutesWeek2)).toEqual(result2)

  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// - Create a function named sortMe
// - Input: object
// - Output: array sorted from least to greatest
    // - assign a variable to the object value 
    // - use the .sort() method to sort the array in acending order

const sortMe = (object) => {
  const values = Object.values(object)
  return values.sort((a,b) => a - b);
}
