const listaAsignaturas=[];


const loadAsignaturas= async()=>{
   
    try{
        listaAsignaturas.length=0;
        const respuesta=await fetch('http://localhost:3000/asignaturas');

        if(!respuesta.ok){
           throw new Error('Error al cargar asignatura. Estado: ',respuesta.status);
        }
        const Asignaturas=await respuesta.json();
        listaAsignaturas.push(...Asignaturas);

    }catch(error){
        console.error("Error al cargar Asignaturas",error.message);
    }
    console.log(listaAsignaturas)

}



const submitAsignaturas=()=>{
    const programaInput=document.getElementById("programa")
    const cursoInput=document.getElementById("curso")
    const codigoInput=document.getElementById("codigo")
    const creditosInput=document.getElementById("creditos")
    const profesorInput=document.getElementById("profesor")
    const cuposInput=document.getElementById("cupos")
    const dia1Input=document.getElementById("dia1")
    const inicioDia1Input=document.getElementById("inicioDia1")
    const finDia1Input=document.getElementById("finDia1")
    const salon1Input=document.getElementById("salon1")



    const programa=programaInput.value;
    const curso=cursoInput.value;
    const codigo=codigoInput.value;
    const creditos=creditosInput.value;
    const profesor=profesorInput.value;
    const cupos=cuposInput.value;

    const nuevoasignatura={
        id:listaAsignaturas.length+1,
        curso_id: 1,
        codigo: codigo,
        creditos: creditos,
        profesor_id: profesor,
        cupos_disponibles: cupos,
        programa_id: programa,
        horario_clases: [
            {
              dia: dia,
              hora_inicio: inicioDia,
              hora_fin: finDia,
              salon_id: 1,
            },
            {
                dia: dia2,
                hora_inicio: inicioDia2,
                hora_fin: finDia2,
                salon_id: 1,
            }
          ]

    }

    guardarAsignatura(nuevoasignatura);

    nombreasignaturaInput=value='';
    apellidoasignaturaInput=value='';
    tipoid_docInput=value='';
    doc_asignaturaInput=value='';
    dep_idInput=value='';


    alert('asignatura creado con éxito!');


}


const guardarAsignatura= async(nuevoasignatura)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/Asignaturas',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoasignatura),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el asignatura. Estado: ',respuesta.status);
        }
        const asignaturaCreado=await respuesta.json();
       
        
        console.log('asignatura creado:', asignaturaCreado);

    }catch(error){
        console.error("Error al cargar Asignaturas",error.message);
    }
}

console.log(listaAsignaturas);


const cargarProgramas=()=>{
    const programaInput=document.getElementById("programa");
    let datos = '';
    for ( const program of listaProgramas){
        datos+=`<option value="${program.id}">${program.nombre}</option>`
     
    }
    console.log(datos)

    programaInput.innerHTML=datos;
}

const cargarCursos=()=>{
    const cursoInput=document.getElementById("curso");
    let datos = '';
    for ( const curso of listaCursos){
        datos+=`<option value="${curso.id}">${curso.nombre}</option>`
     
    }
    console.log(datos)

    cursoInput.innerHTML=datos;
}

const cargarProfesores=()=>{
    const profesorInput=document.getElementById("profesor");
    let datos = '';
    for ( const profesor of listaDocentes){
        datos+=`<option value="${profesor.id}">${profesor.nombre}</option>`
     
    }
    console.log(datos)

    profesorInput.innerHTML=datos;
}


/*

const anadirDia = () => {
    var selectdia = document.createElement('selectdia'); // Crea un elemento select
    selectdia.setAttribute('class', 'block'); // Asigna la clase 'block' al select

    var opciones = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes" ];

    opciones.forEach(opcion => {
        var option = document.createElement('option'); // Crea un elemento option
        option.textContent = opcion; // Establece el texto de la opción
        selectdia.appendChild(option); // Agrega la opción al select
    });

    document.getElementById("formAsignaturas").appendChild(selectdia); // Agrega el select al contenedor
}

*/

const anadirDia = () => {
    var div = document.createElement('div');//Crea un div
	div.setAttribute('class', 'block');//Da classe block al div
	div.textContent="Dia"//contenido del div

    var select = document.createElement('select'); // Crea un elemento select
    select.setAttribute('class', 'block'); // Asigna la clase 'block' al select

    // Opciones para el select
    var opciones = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

    // Itera sobre las opciones y crea un elemento <option> para cada una
    opciones.forEach(opcion => {
        var option = document.createElement('option'); // Crea un elemento option
        option.textContent = opcion; // Establece el texto de la opción
        select.appendChild(option); // Agrega la opción al select
    });

    /*HORARIO*/

    var div2 = document.createElement('div2');//Crea un div
	div2.setAttribute('class', 'block');//Da classe block al div
	div2.textContent="Horario"//contenido del div

    var select2 = document.createElement('select2'); // Crea un elemento select
    select2.setAttribute('class', 'block'); // Asigna la clase 'block' al select

    // Opciones para el select
    var opciones2 = ["8-10", "10-12"];

    // Itera sobre las opciones y crea un elemento <option> para cada una
    opciones2.forEach(opcion => {
        var option2 = document.createElement('option2'); // Crea un elemento option
        option2.textContent = opcion; // Establece el texto de la opción
        select2.appendChild(option2); // Agrega la opción al select
    });

    document.getElementById("formAsignaturas").appendChild(select); // Agrega el select al contenedor
    document.getElementById("formAsignaturas").appendChild(div);//Donde aparece el div
    document.getElementById("formAsignaturas").appendChild(select2); // Agrega el select al contenedor
    document.getElementById("formAsignaturas").appendChild(div2);//Donde aparece el div
    
    
}