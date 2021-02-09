<template>
    <section>
        <fotball-item 
        v-for="(team, index) in fotballClub" 
        :key="index"
        :place="team.place"
        :club="team.club"
        :points="team.points"
        />
    </section>
</template>

<script>
import FotballItem from './FotballItem'
import { ref } from 'vue'

export default {
    setup(){

        const fotballClub = ref([
            {place: "1", club: "Manchester City", points: "50"},
            {place: "2", club: "Manchester United", points: "45"},
            {place: "3", club: "Leicster City", points: "43"},
            {place: "4", club: "Liverpool", points: "40"},
            {place: "5", club: "Chelsea", points: "39"},
            {place: "6", club: "West Ham", points: "39"},
            {place: "7", club: "Everton", points: "37"},
            {place: "8", club: "Tottenham", points: "36"},
            {place: "9", club: "Aston Villa", points: "35"},
            {place: "10", club: "Leeds", points: "32"},
            {place: "11", club: "Arsenal", points: "31"},
            {place: "12", club: "Southampton", points: "29"},
            {place: "13", club: "Crystal Palace", points: "29"},
            {place: "14", club: "Wolves", points: "27"},
            {place: "15", club: "Brighton", points: "25"},
            {place: "16", club: "Newcastle", points: "25"},
            {place: "17", club: "Burnley", points: "23"},
            {place: "18", club: "Fulham", points: "15"},
            {place: "19", club: "West Bromwich", points: "12"},
            {place: "20", club: "Sheffield United", points: "11"}

            
        ]);

    return {fotballClub, FotballItem}

    }
}
</script>