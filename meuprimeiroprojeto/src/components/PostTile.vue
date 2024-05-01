<template>
 <div class="divPost">
    <h2 @click="aberto = !aberto">{{ post.title }}</h2>
    
    <div v-if="aberto">
        <p>{{ post.body }}</p>
        por: {{ post.userId }}
    </div>
 </div>
</template>

<script>
    export default {
        name: 'PostTile',
        props: {
            post: {type: Object, required: true}
        },
        data() {
            return {
                aberto: false
            }
        
        }
    }
</script>
<style>
 .divPost {
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem 0;
 }
 .divPost:hover {
        background-color: #f9f9f9;
 }
</style>