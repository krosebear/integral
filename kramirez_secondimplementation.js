//__Below is an assignment given out by IntegeralGIS to Kendra Ramirez in May of 2018__
//__  This would be my second choice

//__setup function__
function setup(){
  this.arr = [];
  for (var i = 0; i < arguments.length; i++){
    this.arr.push(arguments[i]);
  }
    // __sort the array__
    this.arr.sort()
}
//__prototype find longest prefix__
setup.prototype.findLongestPrefix = function(tester) {
  //__if check for an empty or null array__
  if (this.arr.length == 0 || this.arr == null || !tester){
    console.log("no common prefix");
    return "no common prefix";
  }
  // console.log(this.arr);
  // __assign variable for tester length__
  var testLen= tester.length;
  //__assign variable for prefix match and assign it a predetermined no match in case no prefix matches occur__
  var match = "no match";
  //nested for loop has 0(n^2) time complexity
  for(var i=0; i < this.arr.length; i++){
    if(this.arr[i].length < testLen){
      for(var j = 0; j < this.arr[i].length; j++){
        if(this.arr[i].charAt(j)=== tester.charAt(j)){
          match = this.arr[i];
        }
      }
    }
  }
  console.log(match);
  return match;
}
var test = new setup("abc", "abcd", "abcdde", "a", "br")
var check = "abcdd";

test.findLongestPrefix(check);
