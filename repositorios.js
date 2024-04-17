//export const dados = {

const dados = {
    tarefas: new Array(),
    users: new Array(),
    save: function() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    },
    load: function() {
        this.tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    },
    getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
};

export default dados;