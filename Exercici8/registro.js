
function registerValidate() {

	const form = document.getElementById('myform1');

	let acumErrores = 0;

   
	form.classList.remove('is-invalid');
	
	let inputNum1 = document.getElementById('inputNum1');
	
	let inputNum2 = document.forms["myform1"]["inputNum2"];
	

	if(inputNum1.value == "") {
		
		inputNum1.classList.add("is-invalid");
		document.getElementById("errorNum1").textContent = "El campo es obligatorio";
		acumErrores ++;
	}
    else if(!validar_numero(inputNum1.value)){
		
	inputNum1.classList.add("is-invalid");
	document.getElementById("errorNum1").textContent = "El número no está entre 1 y 10";
	acumErrores ++; }
	else{
		
		document.getElementById("errorNum1").textContent = "";
	}
	
	if(inputNum2.value == "") {
		inputNum2.classList.add("is-invalid");
		document.getElementById("errorNum2").textContent = "El campo es obligatorio";
        acumErrores ++;
		
    }else if(!validar_numero(inputNum2.value)){
		inputNum2.classList.add("is-invalid");
		document.getElementById("errorNum2").textContent = "El número no está entre 1 y 10";
		acumErrores ++; 
	}else{
		
		document.getElementById("errorNum2").textContent = "";
	}


    if (acumErrores > 0){

        return false;

    }else{
		calcular_tabla(inputNum1.value,inputNum2.value);
		return true;
	}
} 



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);


function validar_numero(numero) {

	let valor = false;
	
	if(numero>0 && numero<=10)
	{
		valor = true;
		
		return valor;
	}
    else{ 
		valor = false;
		
		return valor;
	}

}


function calcular_tabla(num1,num2)
{
	document.write("El resultado es:<br/><br/>");
	document.write("<table>");

	for(let i=1;i<=num2;i++)
	{
			let multi = num1 * i;
			document.write("<tr>");
			document.write(`<td style="border:solid 2px black">${num1} x ${i}</td>`);
			document.write(`<td style="border:solid 2px black"> = </td>`);
			document.write(`<td style="border:solid 2px black">${multi}</td>`);
			document.write("</tr>");
	}
	document.write("</table>");
            
}

