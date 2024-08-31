class user {
   constructor(name , email){
    this.name = name;
    this.email = email;
   }
    viewdata(){
        console.log("this is the data")
    }
}
let student = new user("kaleem ", "kaleem@gmail.com");
console.log(student)