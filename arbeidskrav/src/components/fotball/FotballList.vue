<template>
    <section>
        <fotball-item 
        v-for="(team, index) in fotballClub" 
        :key="index"
        :place="team.place"
        :club="team.club"
        />
    </section>
</template>

<script>
import FotballItem from './FotballItem'
import { ref } from 'vue'

export default {
    setup(){

        const fotballClub = ref([
            {place: "1", club: "Manchester City"},
            {place: "2", club: "Manchester United"},
            {place: "3", club: "Leicster City"},
            {place: "4", club: "Liverpool"},
            {place: "5", club: "Chelsea"}
        ]);

    return {fotballClub, FotballItem}

    }
}
</script>