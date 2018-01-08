//Evaluates if a string is a substring of another one
let s = 'francisco'
let sb = 'sco'

console.log(isSubstring(s,sb))

//function that returns true if sub is a substring of s
function isSubstring(s, sub){
  //initialize as false
  let isSub = false

  //find a matching pair of initial characters
  //loop for s string
  for(let i=0; i<s.length; i++){
    //loop for sub string
    for(let j = 0; j<sub.length;j++){

      //We evaluate the substring character with the string's index + substring index character
      //In this way, if it's true, both add one more on the character's index for the next evaluation
      if(sub.charAt(j)==s.charAt(i+j)){
        isSub = true
      } else{
        //If it doesn't match, break the inner loop. No point on keep evaluating
        isSub = false
        break
      }
    }
    //If sub is a substring, then the whole function should return true --> Break the outer loop
    if(isSub){
      break
    }
  }

  return isSub
}
