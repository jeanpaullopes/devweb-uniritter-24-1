const dados = new Array();

function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Olá, mundo!</h1>
        <p>Esse é um parágrafo</p>
        <button onclick="pop()">Clique aqui</button>
        <button onclick="createTable()">cria tabela</button>
    `;
}


function pop() {
    dados.pop();
    render();
   // createTable();
}
function loadData() {
    //dados.push('João');
    //dados.push('Maria');
    //dados.push('José');
    //dados.push('Ana');

    dados.push({id: 1, nome: 'João', idade: 25});
    dados.push({id: 2, nome: 'Maria', idade: 30});
    dados.push({id: 3, nome: 'José', idade: 35});
    
    let a = new Object();
    //let a = {};
    a.id = 4;
    a.nome = 'Ana';
    a.idade = 40;
    dados.push(a);
    const b = dados[0];
    console.log('coisa legal-> ')
    for (let attr in b) {
        console.log(attr + ' -> ' + b[attr]);
    }

}

function createTable() {
    const app = document.getElementById('app');
    const table = document.createElement('table');
    //table.classList.add('tabela');
    const thead = document.createElement('thead');
    const thr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = 'ID';
    const th2 = document.createElement('th');
    th2.innerText = 'Nome';
    const th3 = document.createElement('th');
    th3.innerText = 'Idade';
    thr.appendChild(th1);
    thr.appendChild(th2);
    thr.appendChild(th3);
    thead.appendChild(thr);
    const tbody = document.createElement('tbody');
    dados.forEach ((dado) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = dado.id;
        const td2 = document.createElement('td');
        td2.innerText = dado.nome;
        const td3 = document.createElement('td');
        td3.innerText = dado.idade;
        tr.appendChild(td1); 
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    })
    
    table.appendChild(thead);
    table.appendChild(tbody);
    app.appendChild(table);
}

function showData() {
    // for de iteração pelo indice e tamanho do array
    for (let i = 0; i < dados.length; i++) {
        console.log(dados[i]);
    }

    // iteração pelo elementos do array no array
    dados.forEach(function mostra(item) {
        console.log(item);
    });
    dados.forEach((item) => console.log(item));

    // iteração pelos indices dos elementos do array
    for (let it in dados) {
        console.log(dados[it]);
    }
}
