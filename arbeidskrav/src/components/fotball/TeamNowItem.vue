<template>
    <article>
        <br>
    <h1>{{player}} {{year}} {{position}}</h1>
    </article>
</template>

<script>
export default {
    props:{
        player: String,
        year: Number,
        position: String
    }
}
</script>
