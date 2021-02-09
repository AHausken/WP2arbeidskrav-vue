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
            {place: "5", club: "Chelsea", points: "39"}
        ]);

    return {fotballClub, FotballItem}

    }
}
</script>