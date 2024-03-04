const listaCursos=[];


const loadCursos= async()=>{
   
    try{
        listaCursos.length=0;
        const respuesta=await fetch('http://localhost:3000/cursos');

        if(!respuesta.ok){
           throw new Error('Error al cargar cursos. Estado: ',respuesta.status);
        }
        const Cursos=await respuesta.json();
        listaCursos.push(...Cursos);

    }catch(error){
        console.error("Error al cargar cursos",error.message);
    }
}
