<template>
  <q-list bordered separator>
    <PostItem :post="post" v-for="post in posts" :key="post.id" />
  </q-list>

</template>
<script>
import PostItem from 'src/components/PostItem.vue';
export default {
  name: "PostsList",
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
