const loadMatriculas = async () => {
    try {
        listaMatriculas.length = 0;
        const respuesta = await fetch('http://localhost:3000/matriculas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar matricula. Estado: ', respuesta.status);
        }
        const Matriculas = await respuesta.json();
        listaMatriculas.push(...Matriculas);
    } catch (error) {
        console.error("Error al cargar matriculas", error.message);
    }
}

const loadAsignaturas = async () => {
    try {
        listaAsignaturas.length = 0;
        const respuesta = await fetch('http://localhost:3000/asignaturas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar asignatura. Estado: ', respuesta.status);
        }
        const Asignaturas = await respuesta.json();
        listaAsignaturas.push(...Asignaturas);
    } catch (error) {
        console.error("Error al cargar asignaturas", error.message);
    }
}

const cargarReportes = () => {
    const tablaRecaudos = document.getElementById("tablaRecaudos");

    // Calcular el costo total recaudado por créditos en el periodo 1 y periodo 2
    const recaudacionPeriodo1 = calcularRecaudacionPorPeriodo(1);
    const recaudacionPeriodo2 = calcularRecaudacionPorPeriodo(2);

    // Encontrar la asignatura más matriculada del periodo 1 y periodo 2
    const asignaturaMasMatriculadaPeriodo1 = encontrarAsignaturaMasMatriculada(1);
    const asignaturaMasMatriculadaPeriodo2 = encontrarAsignaturaMasMatriculada(2);

    // Llenar la tabla con los datos obtenidos
    const filaPeriodo1 = document.createElement("tr");
    filaPeriodo1.innerHTML = `
        <td>Periodo 1</td>
        <td>${recaudacionPeriodo1}</td>
        <td>${asignaturaMasMatriculadaPeriodo1}</td>
    `;
    tablaRecaudos.appendChild(filaPeriodo1);

    const filaPeriodo2 = document.createElement("tr");
    filaPeriodo2.innerHTML = `
        <td>Periodo 2</td>
        <td>${recaudacionPeriodo2}</td>
        <td>${asignaturaMasMatriculadaPeriodo2}</td>
    `;
    tablaRecaudos.appendChild(filaPeriodo2);
};

const calcularRecaudacionPorPeriodo = (periodoId) => {
    let totalRecaudado = 0;
    for (const matricula of listaMatriculas) {
        if (matricula.periodo_id === periodoId) {
            const asignatura = listaAsignaturas.find(asignatura => asignatura.id === matricula.asignatura_id);
            totalRecaudado += asignatura.creditos * matricula.precio;
        }
    }
    return totalRecaudado;
};

const encontrarAsignaturaMasMatriculada = (periodoId) => {
    const matriculasPeriodo = listaMatriculas.filter(matricula => matricula.periodo_id === periodoId);
    const conteoAsignaturas = {};

    for (const matricula of matriculasPeriodo) {
        const asignaturaId = matricula.asignatura_id;
        conteoAsignaturas[asignaturaId] = (conteoAsignaturas[asignaturaId] || 0) + 1;
    }

    let maxMatriculas = 0;
    let asignaturaMasMatriculada = "";

    for (const asignaturaId in conteoAsignaturas) {
        if (conteoAsignaturas[asignaturaId] > maxMatriculas) {
            maxMatriculas = conteoAsignaturas[asignaturaId];
            asignaturaMasMatriculada = listaAsignaturas.find(asignatura => asignatura.id === parseInt(asignaturaId)).codigo;
        }
    }

    return asignaturaMasMatriculada;
};

// Llamar a la función para cargar los reportes cuando se cargue la página
window.onload = cargarReportes;
