<template>
    <section>
        <ul>
            <li>Hjemmebane: Old Trafford</li>
            <br>
            <li>Kapasitet: 74 140</li>
            <br>
            <li>Manager: Ole Gunnar Solskjær</li>
            <br>
            <li>Premier League trofeer: 20</li>
            <br>
            <li>FA Cup Trofeer: 12</li>
            <br>
            <li>Champions League trofeer: 2</li>
            <br>
            <br>
            <li>Hvor mange poeng tror du Manchester United trenger for å vinne Premier League denne sesongen?</li>
            <br>
            <li :class="{ 'golden-txt' : unitedPoints > 99 }">{{unitedPoints}}</li>
            <input :class="{ 'golden-btn' : unitedPoints > 99 }" v-on:click="addPoints" type="button" value="Gi Manchester United mer poeng">
        </ul>
    </section>
    <article>
        
    </article>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){

        const unitedPoints = ref(45);

        const addPoints = () =>{
            unitedPoints.value++;
        }

        return{unitedPoints, addPoints}
    }
}
</script>

<style scoped>
.golden-btn{
    background-color: gold;
}

.golden-txt{
    color: gold;
}
</style>
