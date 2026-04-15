const filterStrings = (array) => {
let result = [];

for(let i = 0; i < array.length; i++){
    if (typeof array[i] !== "string"){
        return "All values must be strings"
    }
 if (array[i].length > 4){
    result.push(array[i])
 }
}
return result;
}
console.log(filterStrings(["Bean", "Carrot", "Rice"]));
