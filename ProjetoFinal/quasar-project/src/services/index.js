import { Notify } from 'quasar';
import axios from 'axios';
console.log(process.env.url);
console.log(process.env);

const jsonPlaceHolder = axios.create({
  baseURL: process.env.URL
});
const services = {
  getPosts: (funcaoParaRetornar) => {
    jsonPlaceHolder.get('posts')
    .then( (retorno) => {
      funcaoParaRetornar(retorno.data);
    } ).catch( (erro) => {
      this.mensagemErro(erro);
    });
  },
  getUsers: (callback) => {
    jsonPlaceHolder.get('users').then( (retorno) => {
     callback(retorno.data);
    } ).catch( (erro) => {
      this.mensagemErro(erro);
    })
  },
  mensagem: (msg) => {
    Notify.create({
      message: msg,
      color: 'primary',
      position: 'bottom',
      timeout: 3000
    })
  },
  mensagemErro: (msg) => {
    Notify.create({
      message: msg,
      color: 'negative',
      position: 'bottom',
      timeout: 3000
    })
  }

}

export default services;
