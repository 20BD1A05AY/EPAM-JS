// Very simple, given an integer or a floating-point number, find its opposite.




// function oppositeNum(number){
//     return(-number);
// }



function oppositeNum(num) {
    let result;
    if (!isNaN(Math.sign(num))) {
      result = num * (-1);
    }
    return result;
}
console.log(oppositeNum(9));