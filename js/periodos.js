const listaPeriodos=[];


const loadPeriodos= async()=>{
   
    try{
        listaPeriodos.length=0;
        const respuesta=await fetch('http://localhost:3000/periodos');

        if(!respuesta.ok){
           throw new Error('Error al cargar periodo. Estado: ',respuesta.status);
        }
        const Periodos=await respuesta.json();
        listaPeriodos.push(...Periodos);

    }catch(error){
        console.error("Error al cargar periodos",error.message);
    }
}
