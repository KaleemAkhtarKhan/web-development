let marks = [85, 97, 44, 37, 76, 60];
let totalMarks = 0;
for(let i= 0; i<marks.length; i++){
    totalMarks +=marks[i]; 
}
let totalSub = marks.length;
let averageMarks = totalMarks/totalSub;
console.log("The Average marks of :",averageMarks);