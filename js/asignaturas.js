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
    const nombreasignaturaInput=document.getElementById("nombreasignatura")
    const apellidoasignaturaInput=document.getElementById("apellidoasignatura")
    const tipoid_docInput=document.getElementById("tipoid_doc")
    const doc_asignaturaInput=document.getElementById("doc_asignatura")
    const dep_idInput=document.getElementById("dep_id")

    const nombreasignatura=nombreasignaturaInput.value;
    const apellidoasignatura=apellidoasignaturaInput.value;
    const tipoid_doc=tipoid_docInput.value;
    const doc_asignatura=doc_asignaturaInput.value;
    const dep_id=dep_idInput.value;

    const nuevoasignatura={
        id:listaAsignaturas.length+1,
        nombre: nombreasignatura,
        apellido: apellidoasignatura,
        tipo_documento: tipoid_doc,
        numero_documento: doc_asignatura,
        departamento_id: dep_id
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