function findLongestWord(str) {
 var maxNum = "";
 newArray = str.split(" ");
    for (var i=0; i < newArray.length; i++){
      if (newArray[i].length > maxNum.length){
          maxNum = newArray[i];
      }
    }
  return  maxNum.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
