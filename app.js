import { addTask } from './tasks.js';
import { renderTable, novaTarefa } from './tasksView.js';
import repo from "./repositorios.js";
import { User } from './classes.js';


let dataVisita = localStorage.getItem('data');
if (!dataVisita) {
    dataVisita = new Date();
    localStorage.setItem('data', dataVisita);
} else {
    let data = localStorage.getItem('data');
    alert(data);
    localStorage.setItem('data', new Date());

}
/*
addTask({
    id: 1, 
    responsavel: 'Eu mesmo', // 'Eu mesmo
    descricao: 'Estudar JavaScript', 
    inicio: '2024-04-02', 
    termino: '',
    concluida: false
});
addTask({
    id: 2, 
    responsavel: 'Eu mesmo', // 'Eu mesmo
    descricao: 'Simulado ENADE', 
    inicio: '2024-04-09', 
    termino: '2024-04-09',
    concluida: true
});
*/


//let user = new User('Fulano', 'fulano@beltranos.com');
//user.sobreNome = 'Beltrano';
//console.log(user.getInfo());
//console.log(user);
let response = fetch('https://jsonplaceholder.typicode.com/todos');
response.then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
    });
repo.load();
renderTable();