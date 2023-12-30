const parseCode = (str) => {
  let valArr=str.split("000");
	let obj={firstName:valArr[0],lastName:valArr[1],id:valArr[2]}
return obj;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
