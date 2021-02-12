<template>
    <TeamNowItem

    v-for="(teamnow, index) in teamToday"
    :key="index"
    :player="teamnow.player"
    :year="teamnow.year"
    :position="teamnow.position"
/>
    
</template>

<script>
import { ref } from 'vue'
import TeamNowItem from './TeamNowItem' 

export default {
    setup(){
    
    const teamToday = ref([
        {player: "David de Gea", year: "2011 - D.d", position: "Keeper"},
        {player: "Aaron Wan-Bissaka", year: "2019 - D.d", position: "Right Back"},
        {player: "Victor Lindelöf", year: "2017 - D.d", position: "Center Back"},
        {player: "Harry Maguire", year: "2019 - D.d", position: "Center Back"},
        {player: "Luke Shaw", year: "2014 - D.d", position: "Left Back"},
        {player: "Nemanja Matić", year: "2017 - D.d", position: "Midfield"},
        {player: "Frederico Rodrigues Santos", year: "2017 - D.d", position: "Midfield"},
        {player: "Paul Pogba", year: "2016 - D.d", position: "Midfield"},
        {player: "Bruno Fernandes", year: "2020 - D.d", position: "Midfield"},
        {player: "Marcus Rashford", year: "2005 - D.d", position: "Forward"},
        {player: "Edinson Cavani", year: "2020 - D.d", position: "Forward"},
    ]);

    return{teamToday, TeamNowItem}

    }

}
</script>
