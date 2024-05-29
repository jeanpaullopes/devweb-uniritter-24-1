<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <PostsList :posts="posts" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import services from 'src/services';
import PostsList from 'src/components/PostsList.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    PostsList
  },
  data() {
    return {
      posts: []
    }
  },

  created() {
    services.mensagem('Hello World!');
    //let quandoDerCerto = function funcao(parametro1) {console.log(parametro1)};
    let quandoDerCerto = (p) => {this.posts = p};

    services.getPosts(quandoDerCerto);
    //services.getPosts((p) => console.log(p));
    services.getUsers((users) => console.log(users));

  }
})
</script>
