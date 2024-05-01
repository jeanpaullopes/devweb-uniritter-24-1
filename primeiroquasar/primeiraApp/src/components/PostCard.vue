<template>
  <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">{{post.title}}</div>
        <div class="text-subtitle2">by {{userName}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ post.body }}
      </q-card-section>
    </q-card>
</template>
<script>
import services from 'src/services';
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      userName: ""
    };
  },
  mounted() {
    services.getUserById(this.post.userId, (user)=>{
      this.userName = user.name;
    })
  }
}
</script>
<style>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
