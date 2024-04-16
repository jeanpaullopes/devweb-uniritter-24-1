import { addTask } from './tasks.js';
import { renderTable, novaTarefa } from './tasksView.js';



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
renderTable();