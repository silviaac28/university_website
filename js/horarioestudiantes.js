const loadEstudiantes = async () => {
    try {
        const respuesta = await fetch('http://localhost:3000/estudiantes');
        if (!respuesta.ok) {
            throw new Error('Error al cargar estudiantes. Estado: ', respuesta.status);
        }
        const estudiantes = await respuesta.json();
        const estudianteInput = document.getElementById("estudiante");
        estudiantes.forEach(estudiante => {
            const option = document.createElement('option');
            option.value = estudiante.id;
            option.textContent = `${estudiante.nombre} ${estudiante.apellido}`;
            estudianteInput.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar estudiantes", error.message);
    }
};


const cargarEstudiantes=()=>{
    const estudianteInput=document.getElementById("estudiante");
    let datos = '';
    for ( const alumno of listaAlumnos){
        datos+=`<option value="${alumno.id}">${alumno.nombre} ${alumno.apellido}</option>` 
    }
    console.log(datos)

    estudianteInput.innerHTML=datos;
}




const cargarHorarios = async () => {
    const estudianteInput = document.getElementById("estudiante");
    const estudianteId = parseInt(estudianteInput.value);

    try {
        const respuesta = await fetch(`http://localhost:3000/matriculas?estudiante_id=${estudianteId}`);
        if (!respuesta.ok) {
            throw new Error('Error al cargar horarios del estudiante. Estado: ', respuesta.status);
        }
        const matriculas = await respuesta.json();
        const tablaHorarios = document.getElementById("tablaHorarios");
        tablaHorarios.innerHTML = ''; // Limpiar tabla

        const horarios = {
            lunes: [],
            martes: [],
            miercoles: [],
            jueves: [],
            viernes: []
        };

        matriculas.forEach(matricula => {
            matricula.asignatura.horario_clases.forEach(horario => {
                horarios[horario.dia.toLowerCase()].push(`${horario.hora_inicio} - ${horario.hora_fin}`);
            });
        });

        const tbody = document.createElement('tbody');
        for (let i = 0; i < 5; i++) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${horarios.lunes[i] || '-'}</td>
                <td>${horarios.martes[i] || '-'}</td>
                <td>${horarios.miercoles[i] || '-'}</td>
                <td>${horarios.jueves[i] || '-'}</td>
                <td>${horarios.viernes[i] || '-'}</td>
            `;
            tbody.appendChild(fila);
        }
        tablaHorarios.appendChild(tbody);
    } catch (error) {
        console.error("Error al cargar horarios del estudiante", error.message);
    }
};

document.getElementById("estudiante").addEventListener("change", cargarHorarios);

document.addEventListener('DOMContentLoaded', () => {
    loadEstudiantes();
});
