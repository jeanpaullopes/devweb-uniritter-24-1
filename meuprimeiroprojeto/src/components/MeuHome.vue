<template>
    <div>
        <h3>meu Home</h3>
        bem vind{{ letraPorSexo }} {{ nome }}<br/>
        {{ sexo == 'F' ? 'Seja bem vinda' : 'Seja bem vindo' }}
    </div>
</template>

<script>
export default {
    name: 'MeuHome',
    props: {
        nome: {type: String, required: true},
        sexo: {type: String, default: 'M'}
    },
    computed: {
        letraPorSexo() {
            //return this.sexo === 'F' ? 'a' : 'o'
            if (this.sexo === 'F') 
                return 'a' 
            else 
                return 'o'
        }
    },
}
</script>

<style>
</style>