const formulario = document.getElementById("formulario")
const input = document.getElementById('input')
const listaTarea = document.getElementById("lista-tareas")
const template = document.getElementById("template").content
const fragment = document.createDocumentFragment()

let tareas = {}

console.log(Date.now())

formulario.addEventListener("submit", e => {
    e.preventDefault()
    console.log(input.value)

    setTarea(e)
})

const setTarea = e => {
    
}