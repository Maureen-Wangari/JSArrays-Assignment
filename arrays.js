//Find the last element of:
let arr1 = [3, 7, 34, 90, 12];
console.log('last element:', arr1[arr1.length-1]);

let arr2 = [true, "green", "where", 12, 56];
console.log('last element:', arr2[arr2.length-1]);

//join array elements into a stringmyPets
let pets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = pets.join();
console.log({myPets});

//sorting items 
let arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
let order = arr3.sort(function(a ,b){return a-b});
console.log({order});

//removing duplicates
let people = ["boy", "man","girl", "school", "girl", "woman"];
function removeDuplicates(people){
    return [...new Set(people)];
}
console.log(removeDuplicates(people));

//search and print out conditions
let words = ["the", "way", "x", 4];
let String = "food";

if (Array(String) !== -1){
    console.log("${String} food");
}
else {
    console.log( "${String} the search word was not found");
}


//sort the array
let array = ["renniw"];
let newArray = array.sort();
console.log({newArray});

