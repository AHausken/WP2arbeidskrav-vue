<template>
    <article>
        <br>
    <h1>{{player}} {{year}} {{position}} {{image}}</h1>
    </article>
</template>

<script>
export default {
    props:{
        player: String,
        year: Number,
        position: String,
        image: Image
    }
}
</script>

<style scoped>

</style>