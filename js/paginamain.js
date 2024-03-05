const homeInput = document.getElementById('home')
const pagPeriodosInput = document.getElementById('pagPeriodos')
const pagDepartamentosInput = document.getElementById('pagDepartamentos')
const pagProgramasInput = document.getElementById('pagProgramas')
const pagTarifasInput = document.getElementById('pagTarifas')
const pagCursosInput = document.getElementById('pagCursos')
const formAlumnosInput = document.getElementById('formAlumnos')
const formDocentesInput = document.getElementById('formDocentes')
const formAsignaturasInput = document.getElementById('formAsignaturas')


const paginaPrincipal=()=>{
    pagPeriodosInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
}


const paginaDepartamentos=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="block";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";

    cargarDepartamentosTabla()
}

const paginaProgramas=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";

    cargarProgramasTabla()
}

const paginaPeriodos=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";

    cargarPeriodosTabla()
}

const paginaCursos=()=>{
    pagPeriodosInput.style.display="none";
    pagDepartamentosInput.style.display="block";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";

    cargarCursosTabla()
}

const paginaTarifas=()=>{
    pagPeriodosInput.style.display="none";
    pagDepartamentosInput.style.display="block";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";

    cargarTarifasTabla()
}

const paginaSalones=()=>{
    pagPeriodosInput.style.display="none";
    pagDepartamentosInput.style.display="block";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";

    cargarSalonesTabla()
}

