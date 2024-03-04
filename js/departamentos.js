const listaDepartamentos=[];


const loadDepartamentos= async()=>{
   
    try{
        listaDepartamentos.length=0;
        const respuesta=await fetch('http://localhost:3000/departamentos');

        if(!respuesta.ok){
           throw new Error('Error al cargar departamento. Estado: ',respuesta.status);
        }
        const Departamentos=await respuesta.json();
        listaDepartamentos.push(...Departamentos);

    }catch(error){
        console.error("Error al cargar Departamentos",error.message);
    }
    console.log(listaDepartamentos)
}

