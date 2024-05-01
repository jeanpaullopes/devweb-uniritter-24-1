<template>
<h1>Posts</h1>
<div class="q-pa-md row items-start q-gutter-md">
  <PostCard v-for="p in posts" :key="p.id" :post="p" />
</div>
</template>
<script>
import services from 'src/services';
import PostCard from 'src/components/PostCard.vue';
export default {
  name: 'PostsPage',
  components: {
    PostCard
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    services.getPosts((retorno) =>{
      this.posts = retorno;
    });

  }
}
</script>
<style>
</style>
