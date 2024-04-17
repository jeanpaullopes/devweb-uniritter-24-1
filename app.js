import { addTask } from './tasks.js';
import { renderTable, novaTarefa } from './tasksView.js';
import repo from "./repositorios.js";
import { User } from './classes.js';
import { listUsers, linhaUser } from './usersView.js';


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
let request = fetch('https://jsonplaceholder.typicode.com/users');
request.then((response) => {
        return response.json();
    }).then(function (dadosUsers) {
        dadosUsers.forEach((user) => {
            repo.users.push(user);
        });
        console.log(repo.users);
        const app = document.getElementById('app');
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        app.appendChild( listUsers() );
        //app.appendChild( linhaUser( repo.getUserById(5)))
        
    });
repo.load();
renderTable();

// old way
/*
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    console.log(this.responseText);
 let arr = JSON.parse(this.responseText);
 arr.forEach((user) => {
    let user1 = new User(user.name, user.email);
    console.log(user1.getInfo());
});
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();
*/