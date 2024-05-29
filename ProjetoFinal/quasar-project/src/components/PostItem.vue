<template>
  <q-item clickable v-ripple>
        <q-item-section>{{ post.title }}</q-item-section>
        <q-item-section>
       {{ post.body }}
        </q-item-section>
  </q-item>
</template>
<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
