const parseCode = (str) => {
    let valArr1=str.split("0");
    let valArr=[];
    for(let i in valArr1){
      if(valArr1[i]!=""){
       valArr.push(valArr1[i]);
      }}
    
   // console.log(valArr);
      let object1={firstName:valArr[0],lastName:valArr[1],id:valArr[2]}
  return object1;
  };

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
