let listaMatriculas = []; // Variable global para almacenar las matrículas

const loadMatriculas = async () => {
    try {
        const respuesta = await fetch('http://localhost:3000/matriculas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar matricula. Estado: ' + respuesta.status);
        }
        const matriculas = await respuesta.json();
        listaMatriculas = matriculas; // Asignar los datos cargados a la variable global
    } catch (error) {
        console.error("Error al cargar matriculas", error.message);
    }
};




const cargarReportesTabla=()=>{
    const reportesInput=document.getElementById("tablaRecaudos");
    let datos = '';

    var totalPeriodo1 = 0;
    var totalPeriodo2 = 0;

    for ( const matricula of listaMatriculas){
        if(matricula.periodo_id == 1){
            totalPeriodo1 = totalPeriodo1 + matricula.precio;
            }
        else {
            totalPeriodo2 = totalPeriodo2 + matricula.precio;
}
    
    }

    console.log(totalPeriodo1)
    console.log(totalPeriodo2)

        datos+=`<tr>

            <td>${matricula.periodo_id}</td>
            <td>${totalPeriodo1}</td>


            </tr>`

        datos+=`<tr>

        <td>${matricula.periodo_id}</td>
        <td>${totalPeriodo2}</td>

        </tr>`
    //}
    console.log(datos);

    reportesInput.innerHTML=datos;

}
