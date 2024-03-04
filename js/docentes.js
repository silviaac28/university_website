const listaDocentes=[];


const loadDocentes= async()=>{
   
    try{
        listaDocentes.length=0;
        const respuesta=await fetch('http://localhost:3000/Docentes');

        if(!respuesta.ok){
           throw new Error('Error al cargar alumno. Estado: ',respuesta.status);
        }
        const Docentes=await respuesta.json();
        listaDocentes.push(...Docentes);

    }catch(error){
        console.error("Error al cargar Docentes",error.message);
    }
}



const submitAlumno=()=>{
    const nombreAlumInput=document.getElementById("nombreAlum")
    const apellidoAlumInput=document.getElementById("apellidoAlum")
    const tipoIDInput=document.getElementById("tipoid")
    const docAlumInput=document.getElementById("numdocumento")
    const ciudadInput=document.getElementById("ciudad")
    const direccionInput=document.getElementById("direccion")
    const telefonoInput=document.getElementById("telefono")
    const fechaInput=document.getElementById("fechaNacim")
    const generoInput=document.getElementById("genero")
    const programAlumInput=document.getElementById("idprogram")

    const nombreAlum=nombreAlumInput.value;
    const apellidoAlum=apellidoAlumInput.value;
    const tipoID=tipoIDInput.value;
    const docAlum=docAlumInput.value;
    const ciudad=ciudadInput.value;
    const direccion=direccionInput.value;
    const telefono=telefonoInput.value;
    const fecha=fechaInput.value;
    const genero=generoInput.value;
    const programAlum=programAlumInput.value;

    const nuevoAlumno={
        id:listaDocentes.length+1,
        nombre: nombreAlum,
        apellido: apellidoAlum,
        tipo_documento: tipoID,
        numero_documento: docAlum,
        ciudad_residencia: ciudad,
        direccion: direccion,
        telefono: telefono,
        fecha_nacimiento: fecha,
        sexo: genero,
        programa_id: programAlum
    }

  
    guardarAlumno(nuevoAlumno);

    nombreAlumInput=value='';
    apellidoAlumInput=value='';
    tipoIDInput=value='';
    docAlumInput=value='';
    ciudadInput=value='';
    direccionInput=value='';
    telefonoInput=value='';
    fechaInput=value='';
    generoInput=value='';
    programAlumInput=value='';


    alert('Alumno creado con éxito!');


}


const guardarAlumno= async(nuevoAlumno)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/Docentes',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoAlumno),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el Alumno. Estado: ',respuesta.status);
        }
        const AlumnoCreado=await respuesta.json();
       
        
        console.log('Alumno creado:', AlumnoCreado);

    }catch(error){
        console.error("Error al cargar Docentes",error.message);
    }
}

console.log(listaDocentes);