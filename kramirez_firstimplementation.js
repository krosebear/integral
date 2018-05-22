//__Below is an assignment given out by IntegeralGIS to Kendra Ramirez in May of 2018__
//__this would be my first implementation__
function setup(){
  this.arr = [];
  for (var i = 0; i < arguments.length; i++){
    this.arr.push(arguments[i]);
  }
    // __sort the array__
  this.arr.sort();
  // console.log(this.arr);
}
//
setup.prototype.findLongestPrefix = function(tester) {
  //__create some temp variables to traverse easily__
  var newArr = [];
  var testLen = tester.length;
  var match = "no common prefix";
  //__if check for an empty or null array and an empty tester__
  if (this.arr.length == 0 || this.arr == null || !tester){
    console.log("Array or Tester are empty");
    return "Array or Tester are empty";
  }
  //__for loop to find strings(potential prefixes) within the array that are smaller than the tester parameter, remove strings that do not have the first character or the tester, and to push them into a new array. O(n) time complexity__
  for(var i = 0; i < this.arr.length; i++){
    if(this.arr[i].length < testLen && this.arr[i].startsWith(tester[0])){
      newArr.push(this.arr[i]);
    }
  }
  console.log(newArr);
//__for loop to find the longest string within the sorted array that is the prefix to the tester parameter O(n) time complexity__
  for(var j = 0; j < testLen; j++){
    if(tester.startsWith(newArr[j])){
      match = newArr[j];
      continue;
    }
  }
  console.log(match);
  return match;
}

//
var test = new setup("abc", "abcd", "abcdde", "ogh", "lisbb", "sbdubk", "abde")
var check = "a";
test.findLongestPrefix(check);
