function vowelFilter(arr){ // This is where the vowel filter function is created, with arr as a parameter. 
    // arr represents the array being filtered


let noVowel   // I declared the noVowel variable and left it without a value so that it is be reusable in the for loop,
// The noVowel value will be added, without any vowels, to the filtered array as a string at the index of the variable i.


let filteredArray = []  // I created the empty array to push noVowel values into as the for loop runs through the arr array

let i // I declared this variable to help loop through the array, it increments in the for loop and 
//represents the index of the items in the array. It is without a value in case it could have been useful elsewhere.


    for(i= 0;i<arr.length;i++){ 
     noVowel =   arr[i].replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("o","").replaceAll("u","");

// While the for loop runs, the noVowel variable becomes the string at the index of variable i without the characters a,e,i,o and u.
// The characters are filtered and replaced with an empty string using a replaceAll() method which is chained to the string at the index of i

//  noVowel =   arr[i].replaceAll(/[aeiou]/ig, "")  // Regex Alternative

     filteredArray.push(noVowel)  // After the noVowel variable is filtered, it is added to filteredArray




}
return filteredArray // The vowel filtered array is then returned,as fiteredArray, outside the for loop to finalize the function
}
let array = ["Food","eat","wind","jacket","walk","down","dyk","dry","rhythm"] // here an array is stored in a variable

vowelFilter(array) // vowel filtering function being called to run the code above
console.log(vowelFilter(array)) //Method used to view results of the vowelFilter function in console


