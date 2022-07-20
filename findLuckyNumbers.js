
/*Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
(That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.
*/

// Write your code below this line.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const luckyNumbers = (n) => {
    let randomNumber =[]
    for (let i = 0; i < n; i++){
    randomNumber.push(Math.floor(Math.random() * 10) + 1);
    }
    return randomNumber
}
console.log(luckyNumbers(2));


