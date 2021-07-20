var num = 123456;
var digits = num.toString().split('');
 var realDigits = [];

for (let i = 0; i < digits.length; i++){

 realDigits.push(parseInt(digits[i]))
 
}
var total = realDigits.reduce((a,b) => a+b);
 console.log(total)


