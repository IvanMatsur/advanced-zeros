module.exports = function getZerosCount(number, base) {
  var result = 0;
  var devision;

  var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127];

  for(var i = 0; i < arr.length; i++) {
    while (base % arr[i] === 0 && base / arr[i] !== 1) {
      base = base / arr[i];
    }
  }
  
  devision = base;

  while(number > devision) {
    result += parseInt(number / devision);
    number = number / devision;
  } 
  
  return result;
}