//export const dados = {

const dados = {
    tarefas: new Array(),
    save: function() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    },
    load: function() {
        this.tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    },
};

export default dados;