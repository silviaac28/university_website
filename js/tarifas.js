const listaTarifas=[];


const loadTarifas= async()=>{
   
    try{
        listaTarifas.length=0;
        const respuesta=await fetch('http://localhost:3000/tarifas');

        if(!respuesta.ok){
           throw new Error('Error al cargar tarifa. Estado: ',respuesta.status);
        }
        const Tarifas=await respuesta.json();
        listaTarifas.push(...Tarifas);

    }catch(error){
        console.error("Error al cargar Tarifas",error.message);
    }
}
