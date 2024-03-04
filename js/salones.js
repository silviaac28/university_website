const listaSalones=[];


const loadSalones= async()=>{
   
    try{
        listaSalones.length=0;
        const respuesta=await fetch('http://localhost:3000/salones');

        if(!respuesta.ok){
           throw new Error('Error al cargar salon. Estado: ',respuesta.status);
        }
        const Salones=await respuesta.json();
        listaSalones.push(...Salones);

    }catch(error){
        console.error("Error al cargar Salones",error.message);
    }
}
