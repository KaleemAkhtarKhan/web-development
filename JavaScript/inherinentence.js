class people{
    eat(){
        console.log("eating")
    }
    sleep(){
        console.log("sleep")
    }

}
class engineer extends people{
    work(){
        console.log("solve problem , build new things ")
    }
} 
let kaleem = new engineer;
console. log(kaleem);
console.log(typeof kaleem);