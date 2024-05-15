//Manipulacion del DOM
// La manipulación del DOM (Document Object Model), se refiere a la capacidad 
// de modificar estructura, contenido y estilo de un documento HTML.

//Formas de acceder a un elemento DOM

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    console.log(taskInput)
    const taskInputValue = taskInput.value.trim();
    //trim quita los espacios en blanco al inicio y al final

    if(taskInputValue !== ''){
        tasks.push({
            id: Date.now(),
            text: taskInputValue,
            completed:false
        })
        renderTask();
        taskInput.value = "";
    }
}
//Funcion para mostrar las tasks en pantalla:
function renderTask(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";// En un innerHTML de un elemento HTML, 
    //estás obteniendo una representación de cadena de todo el contenido HTML 
    //dentro de ese elemento, incluyendo sus etiquetas, atributos y texto.
    tasks.forEach(data =>{
        //Crear el elemento de la lista
        const li = document.createElement("li");
        li.textContent = data.text;
        taskList.appendChild(li);
    })
}
//Agregar boton para marcar como completada
//Agregar boton de eliminar