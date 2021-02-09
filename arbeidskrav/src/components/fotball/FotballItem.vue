<template>
    <article>
        <br>
        <h1>{{place}}</h1>
       <h1>{{club}}</h1>
    </article>
</template>

<script>
export default {
    props: {
        place: Number,
        club: String
    }
}
</script>