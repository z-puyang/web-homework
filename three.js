//lv0
let arr = [1,5,6,7,"8",10]
var string_value = String(number); 
function getSum(arr){
  var sum = arr.reduce((pre, cur) => {
	return pre + cur;
})
  return sum;
}
console.log(sum)


//lv1
let str = "can-enter-volunteer-organization"
function change(str) {
    console.log(str.replace(/-./g, chars => chars[1].toUpperCase()));
}
change(str)        