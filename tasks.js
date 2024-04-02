const tarefas = new Array();

function addTask(task) {
    tarefas.push(task);
}

function renderTable() {
    const tbody = document.getElementById('bodyTarefas');
    let html = '';
    tarefas.forEach((task) => {
        html += '<tr>';
        html += '<td>'+ task.id + '</td>';
        html += '<td>'+ task.descricao + '</td>';
        html += '<td>'+ task.responsavel + '</td>';
        html += '<td>'+ task.inicio + '</td>';
        html += '<td>'+ task.termino + '</td>';
        html += '<td>'+ task.concluida + '</td>';
        html += '</tr>';
        //html += `<tr>
        //            <td>${task.id}</td>
        //            <td>${task.descricao}</td>
        //            <td>${task.inicio}</td>
        //            <td>${task.termino}</td>
        //            <td>${task.concluida}</td>
        //        </tr>`;
    });
    tbody.innerHTML = html;
}


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
            concluida: false
        });
console.log(tarefas);

