<template>
    <article>
        <br>
        <h1>{{place}} {{club}} {{points}} </h1>
        
    </article>
</template>

<script>
export default {
    props: {
        place: Number,
        club: String,
        points: Number
    }
}
</script>

<style scoped>
     h1{
        color: black;
        font-size: 23px;
    }
</style>


