import repo from "./repositorios.js";

export function listUsers() {
    const div = document.createElement('div');
    repo.users.forEach((user) => {
        div.appendChild( linhaUser(user) );
    });
    //document.getElementById('app').appendChild(div);
    return div;
}
export function linhaUser(user) {
    const p = document.createElement('p');
    p.innerHTML += `(${user.id}) ${user.name} - ${user.email}`;
    return p;
}