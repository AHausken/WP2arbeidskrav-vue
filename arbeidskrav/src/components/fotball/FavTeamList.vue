<template>
    <fav-team-item 
    v-for="(fteam, index) in favTeam"
    :key="index"
    :player="fteam.player"
    :year="fteam.year"
    :position="fteam.position"
    />
</template>

<script>
import { ref } from 'vue'
import FavTeamItem from './FavTeamItem'

export default {
    setup(){
    
    const favTeam = ref([
        {player: "Edwin Van Der Sar", year: "2005 - 2011", position: "Keeper"},
        {player: "Rafael da Silva", year: "2008 - 2014", position: "Right Back"},
        {player: " Nemanja Vidić", year: "2006 - 2014", position: "Center Back"},
        {player: "Rio Ferdinand", year: "2002 - 2014", position: "Center Back"},
        {player: "Patrice Evra", year: "2006 - 2014", position: "Left Back"},
        {player: "David Beckham", year: "1993 - 2003", position: "Midfield"},
        {player: "Paul Scholes", year: "1993 - 2011", position: "Midfield"},
        {player: "Ryan Giggs", year: "1990 - 2014", position: "Midfield"},
        {player: "Wayne Rooney", year: "2004 - 2017", position: "Midfield"},
        {player: "Cristiano Ronaldo", year: "2003 - 2009", position: "Forward"},
        {player: "Robin van Persie", year: "2012 - 2015", position: "Forward"}
    ]);

    return{favTeam, FavTeamItem}

    }

}
</script>
