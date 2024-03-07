const listaAsignaturas=[];


const loadAsignaturas= async()=>{
   
    try{
        listaAsignaturas.length=0;
        const respuesta=await fetch('http://localhost:3000/asignaturas');

        if(!respuesta.ok){
           throw new Error('Error al cargar asignatura. Estado: ',respuesta.status);
        }
        const Asignaturas=await respuesta.json();
        listaAsignaturas.push(...Asignaturas);

    }catch(error){
        console.error("Error al cargar Asignaturas",error.message);
    }
    console.log(listaAsignaturas)

}



const submitAsignaturas=()=>{
    const programaInput=document.getElementById("programa")
    const cursoInput=document.getElementById("curso")
    const codigoInput=document.getElementById("codigo")
    const creditosInput=document.getElementById("creditos")
    const profesorInput=document.getElementById("profesor")
    const cuposInput=document.getElementById("cupos")


    let horaInicio = ""
    let horaFin = ""

    const horarios = [];
    const horariosInputs = document.querySelectorAll('.horario');
    horariosInputs.forEach(horarioInput => {
        const diaSemana = horarioInput.querySelector('.diaSemana').value;
        const salonHora = horarioInput.querySelector('.salonHorarioAsignatura').value;
        if(horarioInput.querySelector('.franja-horaria').value === "horario1"){
            horaInicio = "6:00 am"
            horaFin = "8:00 am"

        }else if(horarioInput.querySelector('.franja-horaria').value === "horario2"){
            horaInicio = "8:00 am"
            horaFin = "10:00 am"

        }else if(horarioInput.querySelector('.franja-horaria').value === "horario3"){
            horaInicio = "10:00 am"
            horaFin = "12:00 pm"

        }else if(horarioInput.querySelector('.franja-horaria').value === "horario4"){
             horaInicio = "12:00 pm"
             horaFin = "2:00 pm"

        }
        else if(horarioInput.querySelector('.franja-horaria').value === "horario5"){
             horaInicio = "2:00 pm"
             horaFin = "4:00 pm"

        }else if(horarioInput.querySelector('.franja-horaria').value === "horario6"){
             horaInicio = "4:00 pm"
             horaFin = "6:00 pm"

        }
        horarios.push({ dia: diaSemana, hora_inicio: horaInicio, hora_fin: horaFin, salon_id : salonHora });
    });

    
    const programa=programaInput.value;
    const curso=cursoInput.value;
    const codigo=codigoInput.value;
    const creditos=creditosInput.value;
    const profesor=profesorInput.value;
    const cupos=cuposInput.value;

    const nuevoasignatura={
        id:listaAsignaturas.length+1,
        curso_id: 1,
        codigo: codigo,
        creditos: creditos,
        profesor_id: profesor,
        cupos_disponibles: cupos,
        programa_id: programa,
        horario_clases: horarios

    }

    guardarAsignatura(nuevoasignatura);



    alert('asignatura creado con éxito!');

}


const agregarHorario = () => {

    const horariosContainer = document.getElementById('horarios-container');
    const nuevoHorario = document.createElement('div');
    nuevoHorario.classList.add('horario');
    nuevoHorario.innerHTML = `
        <label for="diaSemana">Día de la Semana:</label>
        <select class="diaSemana">
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
        </select>

        <label for="franja-horaria">Horario:</label>
        <select class="franja-horaria" required>
            <option value = "horario1"> 6:00 am - 8:00 am </option>
            <option value = "horario2"> 8:00 am - 10:00 pm </option>
            <option value = "horario3"> 10:00 am - 12:00 pm </option>
            <option value = "horario4"> 12:00 pm - 2:00 pm </option>
            <option value = "horario5"> 2:00 pm - 4:00 pm </option>
            <option value = "horario6"> 4:00 pm - 6:00 pm </option>
        </select>

        <label for="salonHorarioAsignatura">Salón:</label>
        <select class="salonHorarioAsignatura" required>
        </select>`
    ;

    horariosContainer.appendChild(nuevoHorario);

}; 




const guardarAsignatura= async(nuevoasignatura)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/asignaturas',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoasignatura),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el asignatura. Estado: ',respuesta.status);
        }
        const asignaturaCreado=await respuesta.json();
       
        
        console.log('asignatura creado:', asignaturaCreado);

    }catch(error){
        console.error("Error al cargar Asignaturas",error.message);
    }
}

console.log(listaAsignaturas);


const cargarProgramas=()=>{
    const programaInput=document.getElementById("programa");
    let datos = '';
    for ( const program of listaProgramas){
        datos+=`<option value="${program.id}">${program.nombre}</option>`
     
    }
    console.log(datos)

    programaInput.innerHTML=datos;
}

const cargarCursos=()=>{
    const cursoInput=document.getElementById("curso");
    let datos = '';
    for ( const curso of listaCursos){
        datos+=`<option value="${curso.id}">${curso.nombre}</option>`
     
    }
    console.log(datos)

    cursoInput.innerHTML=datos;
}

const cargarProfesores=()=>{
    const profesorInput=document.getElementById("profesor");
    let datos = '';
    for ( const profesor of listaDocentes){
        datos+=`<option value="${profesor.id}">${profesor.nombre}</option>`
     
    }
    console.log(datos)

    profesorInput.innerHTML=datos;
}
