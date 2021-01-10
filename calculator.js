let numone = 10;
let numtwo = 15;
let oper = "addition";

if(oper==="addition"){
  let result= numone+numtwo;
  console.log(`Your result is ${result}`);
}
else if(oper.toLowerCase==="subtraction"){
  let result=numone-numtwo;
  console.log(`Your result is ${result}`);
}
else if(oper.toLowerCase==="multiplication"){
  let result=numone*numtwo;
  console.log(`Your result is ${result}`);
}
else if(oper.toLowerCase==="division" && numtwo !== 0 ){
  let result=numone/numtwo;
  console.log(`Your result is ${result}`);
}
else{
  console.log(`Please check your input`);
}