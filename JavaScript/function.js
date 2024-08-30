// fucnction that print only vowels of a string 

function str( name){
    let count = 0;
     name = "kaleem";
    for(let i =0; i<name.length; i++ ){
        if(name[i]==="a" || name[i]=== "e" || name[i]=== "i" || name[i]=== "o" || name[i]=== "u"){
            count ++;
        }
    }
    return count;
}
console.log(str());