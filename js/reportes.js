const cargarInformes=()=>{
    let valorTotalMatriculas=0;
    console.log(listaMatriculas)
    informesInput.innerHTML="hola" 
    for(const matriculas of listaMatriculas){
        valorTotalMatriculas+= matriculas.precio
    }
    console.log(valorTotalMatriculas)
   
    
const repeticionesAsignaturas = {};

// Iteramos sobre cada matrícula
listaMatriculas.forEach(matricula => {
    // Verificamos si asignatura_id es un array
    if (Array.isArray(matricula.asignatura_id)) {
        matricula.asignatura_id.forEach(asignaturaId => {
            // Incrementamos el contador de la asignatura
            repeticionesAsignaturas[asignaturaId] = (repeticionesAsignaturas[asignaturaId] || 0) + 1;
        });
    } else {
        // Incrementamos el contador de la asignatura
        repeticionesAsignaturas[matricula.asignatura_id] = (repeticionesAsignaturas[matricula.asignatura_id] || 0) + 1;
    }
});

}
// Mostramos el objeto con la cantidad de veces que aparece cada asignatura
console.log(repeticionesAsignaturas);
let asignaturaMasRepetida = null;
let maxRepeticiones = 0;

for (let asignaturaId in repeticionesAsignaturas) {
    if (repeticionesAsignaturas[asignaturaId] > maxRepeticiones) {
        asignaturaMasRepetida = asignaturaId;
        maxRepeticiones = repeticionesAsignaturas[asignaturaId];
    }
    
}
console.log(listaAsignaturas[asignaturaMasRepetida-1].codigo);
informesInput.innerHTML=`
<h1> total recaudado</h1>
<h1>${valorTotalMatriculas}</h1>
<h1>  asignatura más matriculada</h1>
<h1>${listaAsignaturas[asignaturaMasRepetida-1].codigo}</h1>`