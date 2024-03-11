const listaMatriculas=[];
let precio1 = 0;
let item=0;
let asignaturasAnadidas= [];
let totalCreditos = 0;

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





const cargarEstudiantes=()=>{
    const estudianteInput=document.getElementById("estudiante");
    let datos = '';
    for ( const alumno of listaAlumnos){
        datos+=`<option value="${alumno.id}">${alumno.nombre} ${alumno.apellido}</option>` 
    }
    console.log(datos)

    estudianteInput.innerHTML=datos;
}

const cargarAsignaturas = () => {
    const asignaturaInput = document.getElementById("asignatura");
    let datos = '';
    
    // Creamos un conjunto (Set) para almacenar las asignaturas únicas
    const asignaturasUnicas = new Set();

    // Iteramos sobre la lista de asignaturas y agregamos cada código de asignatura al conjunto
    for (const asignatura of listaAsignaturas) {
        asignaturasUnicas.add(asignatura.codigo);
    }

    // Convertimos el conjunto de asignaturas únicas de nuevo a un array
    const asignaturasArray = Array.from(asignaturasUnicas);

    // Ahora iteramos sobre el array de asignaturas únicas para crear las opciones del select
    for (const codigoAsignatura of asignaturasArray) {
        datos += `<option value="${codigoAsignatura}">${codigoAsignatura}</option>`;
    }

    console.log(datos);

    asignaturaInput.innerHTML = datos;
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

const cargarTarifas=()=>{
    const tarifaInput=document.getElementById("tablaTarifas");
    let datos = '';
    for ( const tarifa of listaTarifas){
        datos+=`<option value="${tarifa.id}">${tarifa.costo_credito}</option>` 
    }
    console.log(datos)

    tarifaInput.innerHTML=datos;
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

const calcularTotalCreditos = () => {
    totalCreditos = 0; 
    asignaturasAnadidas.forEach(asignaturaId => {
        const asignatura = listaAsignaturas.find(asignatura => asignatura.id === asignaturaId);
        totalCreditos += asignatura.creditos; 
    });
};

const submitMatriculas = () => {
    const estudianteInput = document.getElementById("estudiante");
    const asignaturaInput = document.getElementById("asignatura");
    const periodoInput = document.getElementById("periodo");

    const estudiante = parseInt(estudianteInput.value);
    const asignatura = parseInt(asignaturaInput.value);
    const periodo = parseInt(periodoInput.value);

    
    const nuevaMatricula = {
        id: listaMatriculas.length + 1,
        estudiante_id: estudiante,
        asignatura_id: asignaturasAnadidas,
        periodo_id: periodo,
        precio: precio1 
    };

    guardarMatricula(nuevaMatricula);

    alert("Matricula realizada correctamente")
};


    const guardarMatricula= async(nuevaMatricula)=>{
        console.log("holaaaaaaaaaaa")
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
           
            
            console.log('docente creado:', matriculaCreada);
    
        }catch(error){
            console.error("Error al cargar Matriculas",error.message);
        }
    }


const agregarMatricula = () => {

    const estudianteInput=document.getElementById("estudiante")
    const asignaturaInput=document.getElementById("asignatura")
    const periodoInput=document.getElementById("periodo")
    const precioInput=document.getElementById("precio")
        
    const estudiante=parseInt(estudianteInput.value);
    const asignatura=asignaturaInput.value;

// Verificar si el estudiante ya ha matriculado esta asignatura en el JSON
const estudianteYaMatriculado = listaMatriculas.some(matricula => matricula.estudiante_id === estudiante && matricula.asignatura_id.includes(asignatura));
if (estudianteYaMatriculado) {
    alert("Este estudiante ya ha matriculado esta asignatura.");
    return; // Detener la ejecución si el estudiante ya está matriculado en la asignatura
}

// Verificar si el estudiante ya ha matriculado esta asignatura- ESTO ES LO UNICO QUE CAMBIOOOO
if (asignaturasAnadidas.includes(asignatura)) {
    alert("Este estudiante ya ha matriculado esta asignatura.");
    return; // Detener la ejecución si la asignatura ya fue matriculada
}

asignaturasAnadidas[item]=asignatura;
item =item+1;
console.log(asignaturasAnadidas)


    const periodo=periodoInput.value;
    const matriculaContainer = document.getElementById('tablaMatriculas');
    const nuevaMatricula = document.createElement('tr');
    nuevaMatricula.classList.add('matricula');

    console.log(listaAlumnos[estudiante-1].nombre)
    const encontrados = listaTarifas.filter(function (elemento) {

        console.log(elemento.periodo_id)
        console.log(periodo)
        console.log(elemento.programa_id)
        console.log(asignatura)
        return elemento.periodo_id == periodo && elemento.programa_id == listaAsignaturas[asignatura-1].programa_id;
    });

    console.log(encontrados)
        precio1 = encontrados[0].costo_credito;
    
    console.log(precio1)
    nuevaMatricula.innerHTML = `
    <td>${item}</td>
    <td>${listaAlumnos[estudiante-1].nombre}</td>
    <td>${listaAsignaturas[asignatura-1].codigo}</td>
    <td>${listaPeriodos[periodo-1].codigo}</td>
    <td>${precio1}</td>
    `
    ;
    matriculaContainer.appendChild(nuevaMatricula);

    calcularTotalCreditos(); 
    document.getElementById('totalCreditos').textContent = `Total de créditos: ${totalCreditos}`;
    

}; 


