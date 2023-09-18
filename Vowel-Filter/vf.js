function vowelFilter(arr){  
let noVowel   
let filteredArray = [] 
let i 
    for(i= 0;i<arr.length;i++){ 
     noVowel =   arr[i].replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("o","").replaceAll("u","");
     filteredArray.push(noVowel)
}
return filteredArray
}
let array = ["Food","eat","wind","jacket","walk","down","dyk","dry","rhythm"] 
vowelFilter(array) 
console.log(vowelFilter(array))


