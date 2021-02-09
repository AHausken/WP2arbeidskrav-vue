<template>
    <section>
        <ul>
            <li>Hjemmebane: Old Trafford</li>
            <li>Kapasitet: 74 140</li>
            <li>Premier League trofeer: 20</li>
            <li>FA Cup Trofeer: 12</li>
            <li>Champions League trofeer: 2</li>
            <br>
            <br>
            <li>Poeng denne sesongen: {{unitedPoints}}</li>
            <input v-on:click="addPoints" type="button" value="Gi Manchester United mer poeng">
        </ul>
    </section>
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