<template>
    <div>
      {{ msg }}
      <button @click="meuArray = []">Limpar</button>
      <button @click="carregar">Carregar</button>
        <p v-for="element in meuArray" v-bind:key="element">
            <PostTile :post="element" />
            
        </p>
</div>
</template>

<script>
//import MeuHome from './MeuHome.vue';
import PostTile from './PostTile.vue';
export default {
    name: 'MeuSegundo',
    components: {
        PostTile
    },
    data() {
        return {
          msg: "",
            meuArray: []
        }
    },
    created() {
      this.msg="Meu Segundo Componente";
        
    },
    methods: {
      carregar() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.msg = "chegou os Posts";
          this.meuArray = data;
          this.msg = "rederizou os Posts";
          
          
            
        }); 
      }
    }
    
}


</script>

<style>
</style>