import { renderTable, novaTarefa } from './tasksView.js';
import repo  from "./repositorios.js";

export function addTask(task) {
    repo.tarefas.push(task);
}

function endTask(id) {
    //const task = tarefas.find((task) => task.id === id);
    //task.concluida = true;
    repo.tarefas.forEach((task) =>{
        if (task.id == id) {
            task.concluida = true;
            task.termino = new Date().toLocaleDateString();//.toISOString().split('T')[0];
        }
    });
    renderTable();
}
function removeTask(id) {
    //const index = tarefas.findIndex((task) => task.id === id);
    //tarefas.splice(index, 1);
    repo.tarefas.forEach((task, index) =>{
        if (task.id == id) {
            tarefas.splice(index, 1);
        }
    });
    renderTable();
}


function createTask() {
    const task = {
        id: document.getElementById('id').value,
        descricao: document.getElementById('descricao').value,
        responsavel: document.getElementById('responsavel').value,
        inicio: document.getElementById('inicio').value,
        termino: document.getElementById('termino').value,
        concluida: false
    };
    addTask(task);
    renderTable();

    };



