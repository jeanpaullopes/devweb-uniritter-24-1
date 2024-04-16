import repo from "./repositorios.js";

export function novaTarefa() { 
    document.getElementById('app').innerHTML =
    `   <div id="formTarefa">
            id: <input type="text" id="id"><br/>
            descrição: <input type="text" id="descricao"><br/>
            responsável: <input type="text" id="responsavel"><br/>
            data de início: <input type="date" id="inicio"><br/>
            data de término: <input type="date" id="termino"><br/>
            <button onclick="createTask()">Criar Tarefa</button>
        </div>
        `
}

export function renderTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    tr.innerHTML =  `
                    <th>id</th>
                    <th>Descrição</th>
                    <th>Responsável</th>
                    <th>Data de Início</th>
                    <th>Data de Término</th>
                    <th>Concluída</th>`;
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    
    repo.tarefas.forEach((task) => {
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        tdId.innerHTML = task.id;
        let tdDescricao = document.createElement('td');
        tdDescricao.innerHTML = task.descricao;
        let tdResponsavel = document.createElement('td');
        tdResponsavel.innerHTML = task.responsavel;
        let tdInicio = document.createElement('td');
        tdInicio.innerHTML = task.inicio;
        let tdTermino = document.createElement('td');
        tdTermino.innerHTML = task.termino;
        let tdEnd = document.createElement('td');
        let btnEnd = document.createElement('button');
        btnEnd.innerHTML = 'Concluir';
        btnEnd.onclick = function() {
            endTask(task.id);
        };
        if (!task.concluida) {
            tdEnd.appendChild(btnEnd);
        } else  {
            tdEnd.innerHTML = 'Feito!!!';
        }
        let tdRemove = document.createElement('td');
        let btnRemove = document.createElement('button');
        btnRemove.onclick = function() {
            removeTask(task.id);
        };
        btnRemove.innerHTML = 'Excluir';
        tdRemove.appendChild(btnRemove);
        tr.appendChild(tdId);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdResponsavel);
        tr.appendChild(tdInicio);
        tr.appendChild(tdTermino);
        tr.appendChild(tdEnd);
        tr.appendChild(tdRemove);
        if (task.concluida) {
            tr.classList.add('concluida');
        }
        tbody.appendChild(tr);
        //html += '<tr>';
        //html += '<td>'+ task.id + '</td>';
        //html += '<td>'+ task.descricao + '</td>';
        //html += '<td>'+ task.responsavel + '</td>';
        //html += '<td>'+ task.inicio + '</td>';
        //html += '<td>'+ task.termino + '</td>';
        //html += '<td>'+ task.concluida + '</td>';
        //html += '<td><button onclick="endTask('+ task.id +')">Concluir</button></td>';
        //html += '<td><button onclick="removeTask('+ task.id +')">Excluir</button></td>';
        //html += '</tr>';
        //html += `<tr>
        //            <td>${task.id}</td>
        //            <td>${task.descricao}</td>
        //            <td>${task.inicio}</td>
        //            <td>${task.termino}</td>
        //            <td>${task.concluida}</td>
        //        </tr>`;
    });
    //tbody.innerHTML = html;
    document.getElementById('app').innerHTML = '';
    document.getElementById('app').appendChild(table);
    document.getElementById('app').innerHTML +='<button onclick="novaTarefa()">Nova Tarefas</button>'
}


