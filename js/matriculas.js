const listaMatriculas=[];


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
