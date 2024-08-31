let data = "this is the data ";
class user {
    
    constructor(name , email){
     this.name = name;
     this.email = email;
    }
     viewdata(){
         console.log(data)
     }
 }
 class admin extends user{
    constructor(name , email){
        super(name, email);
    }
    editData(){
        console.log("this is the method for admiin to edit the data ")
    }

 }
 let student = new user("kaleem ", "kaleem@gmail.com");
 console.log(student)
 let adminn = new admin("kaleem ", "kaleem@gmail.com ");
console.log(adminn) ;
console.log(adminn.editData());