const listaMatriculas=[];

let item=0;
const loadMatriculas= async()=>{
   
    try{
        listaMatriculas.length=0;
        const respuesta=await fetch('http://localhost:3000/matriculas');

        if(!respuesta.ok){
           throw new Error('Error al cargar matricula. Estado: ',respuesta.status);
        }
        const Matriculas=await respuesta.json();
        listaMatriculas.push(...Matriculas);

    }catch(error){
        console.error("Error al cargar matriculas",error.message);
    }
}


const cargarMatriculasTabla=()=>{
    const matriculaInput=document.getElementById("tablaMatriculas");
    let datos = '';
    for ( const matric of listaMatriculas){
        datos+=`<tr>

        <td>${matric.id}</td>
        <td>${matric.estudiante_id}</td>
        <td>${matric.asignatura_id}</td>
        <td>${matric.periodo_id}</td>

        </tr>`
    }
    console.log(datos)

    matriculaInput.innerHTML=datos;

}


const cargarEstudiantes=()=>{
    const estudianteInput=document.getElementById("estudiante");
    let datos = '';
    for ( const alumno of listaAlumnos){
        datos+=`<option value="${alumno.id}">${alumno.nombre} ${alumno.apellido}</option>` 
    }
    console.log(datos)

    estudianteInput.innerHTML=datos;
}

const cargarAsignaturas=()=>{
    const asignaturaInput=document.getElementById("asignatura");
    let datos = '';
    for ( const asignat of listaAsignaturas){
        datos+=`<option value="${asignat.id}">${asignat.codigo}</option>` 
    }
    console.log(datos)

    asignaturaInput.innerHTML=datos;
}

const cargarPeriodos=()=>{
    const periodoInput=document.getElementById("periodo");
    let datos = '';
    for ( const period of listaPeriodos){
        datos+=`<option value="${period.id}">${period.codigo}</option>` 
    }
    console.log(datos)

    periodoInput.innerHTML=datos;
}

/*
var encontrados = listaTarifas.filter(function (elemento) {
    return elemento.periodo_id == dataPeriod && elemento.programa_id == dataPrograma // ◄ Aquí se desea que aplique el arreglo comparaciones 
});

*/

const submitMatriculas=()=>{
    const estudianteInput=document.getElementById("estudiante")
    const asignaturaInput=document.getElementById("asignatura")
    const periodoInput=document.getElementById("periodo")
    const precioInput=document.getElementById("precio")

    const estudiante=estudianteInput.value;
    const asignatura=asignaturaInput.value;
    const periodo=periodoInput.value;
    const precio=precioInput.value;

    const nuevaMatricula={
        id:listaMatriculas.length+1,
        estudiante_id: estudiante,
        asignatura_id: asignatura,
        periodo_id: periodo,
        precio: precio
    }

    guardarMatricula(nuevaMatricula);


    alert('Matricula realizada con éxito!');


}

const guardarMatricula= async(nuevaMatricula)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/matriculas',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevaMatricula),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear la matricula. Estado: ',respuesta.status);
        }
        const matriculaCreada=await respuesta.json();
       
        
        console.log('Matricula creado:', matriculaCreada);

    }catch(error){
        console.error("Error al cargar Matricula",error.message);
    }
}


const agregarMatricula = () => {
item =item+1;
const estudianteInput=document.getElementById("estudiante")
const asignaturaInput=document.getElementById("asignatura")
const periodoInput=document.getElementById("periodo")
const precioInput=document.getElementById("precio")

const estudiante=estudianteInput.value;
const asignatura=asignaturaInput.value;
const periodo=periodoInput.value;
    const matriculaContainer = document.getElementById('tablaMatriculas');
    const nuevoMatricula = document.createElement('tr');
    nuevoMatricula.classList.add('matricula');
    console.log(listaAlumnos[estudiante-1].nombre)
    nuevoMatricula.innerHTML = `
    <td>${item}</td>
    <td>${listaAlumnos[estudiante-1].nombre}</td>
    <td>${listaAsignaturas[asignatura-1].codigo}</td>
    <td>${listaPeriodos[periodo-1].codigo}</td>

   
    
    `
    ;
    matriculaContainer.appendChild(nuevoMatricula);

   

}; 





    

