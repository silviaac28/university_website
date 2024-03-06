const nota=()=>{

	var div = document.createElement('div');//Crea un div
	div.setAttribute('class', 'block');//Da classe block al div
	div.textContent="Esta es una nueva nota creada con js"//contenido del div
	document.getElementById("columna").appendChild(div);//Donde aparece el div
}

