const formulario = document.getElementById("formulario")
const input = document.getElementById('input')
const listaTarea = document.getElementById("lista-tareas")
const template = document.getElementById("template").content
const fragment = document.createDocumentFragment()

//Array con las tareas
let tareas = {}

//Para que al refrescar la pag no se pierdan las tareas ya agendadas
document.addEventListener('DOMContentLoaded', ()=>{
    pintarTareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

formulario.addEventListener("submit", e => {
    e.preventDefault()
    console.log(input.value)

    setTarea(e)
})

//Funcion para guardar la tarea
const setTarea = e => {
    if(input.value.trim()===''){
        console.log('esta vacio')
        alert("🖕🏻 Intriduce un valor! 🖕🏻")
        return
    }
    console.log('diste click')

    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false,

    }

    tareas[tarea.id] = tarea

    //console.log(tareas);

    formulario.reset()
    input.focus()

    pintarTareas()
}

const pintarTareas = () => {
    //Para que limpie lo que estaba antes (parte desde 0)
    listaTarea.innerHTML = ''
    //Accedemos a los onjetos
    Object.values(tareas).forEach(tarea => {
        //Clonamos el template
        const clone = template.cloneNode(true)
        //Pintamos dentro del parrafo la tarea
        clone.querySelector('p').textContent = tarea.texto
        clone.querySelector('.fas').dataset.id = tarea.id
        //Para pintarlo (INVESTIGAR MAS A DETALLE)
        fragment.appendChild(clone)
    })

    listaTarea.appendChild(fragment)
}

const btnAccion = e => {
    //para detectar a que boton le picas e.target.classList.contains('fa-check-circle'
    if(e.target.classList.contains('fa-check-circle')){
        tareas[e.target.dataset.id].estado = true
        pintarTareas()
        console.log(tareas)
    }
    e.stopPropagation()
}