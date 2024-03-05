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
              dia: dia1,
              hora_inicio: inicioDia1,
              hora_fin: finDia1,
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