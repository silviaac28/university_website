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

const cargarRecaudos = () => {
    const tablaRecaudos = document.getElementById("tablaRecaudos");
    let datos = '';

    // Obtener los períodos únicos presentes en el JSON de matrículas
    const periodosUnicos = [...new Set(listaMatriculas.map(matricula => matricula.periodo_id))];

    // Iterar sobre cada período único para calcular el total recaudado y la asignatura más matriculada
    periodosUnicos.forEach(periodo => {
        // Filtrar las matrículas por el período actual
        const matriculasPeriodo = listaMatriculas.filter(matricula => matricula.periodo_id === periodo);

        // Calcular el total recaudado en matrículas para el período actual
        const totalRecaudado = matriculasPeriodo.reduce((total, matricula) => total + matricula.precio, 0);

        // Obtener la asignatura más matriculada para el período actual
        const asignaturasMatriculadas = matriculasPeriodo.map(matricula => matricula.asignatura_id).flat();
        const asignaturaMasMatriculadaId = mode(asignaturasMatriculadas);

        // Encontrar la asignatura correspondiente al ID más matriculado
        const asignaturaMasMatriculada = listaAsignaturas.find(asignatura => asignatura.id === asignaturaMasMatriculadaId);

        // Construir la fila de la tabla con la información obtenida
        datos += `<tr>
                    <td>${periodo}</td>
                    <td>${totalRecaudado}</td>
                    <td>${asignaturaMasMatriculada ? asignaturaMasMatriculada.codigo : 'N/A'}</td>
                  </tr>`;
    });

    // Llenar la tabla con los datos generados
    tablaRecaudos.innerHTML = datos;
};

// Función para encontrar el elemento más frecuente en un array
const mode = arr =>
  arr.reduce(
    (a, b, _, arr) =>
      (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
    null
  );

// Llamar a la función para cargar los recaudos al cargar la página
window.onload = () => {
    loadMatriculas()
        .then(() => cargarRecaudos())
        .catch(error => console.error(error));
};
