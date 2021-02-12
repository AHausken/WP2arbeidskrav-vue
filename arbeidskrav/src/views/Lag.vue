<template>
    <h1>All time favoritt lag VS laget i 2021</h1>
    <br>

    <input type="button" @click="showFav =! showFav" value="Trykk for mitt favoritt lag">
    
    <input type="button" @click="showTeamNow =! showTeamNow" value="Trykk for å se hvordan laget ser ut i dag">

    

    <section v-if="showFav">
       <h2>All Time Favs</h2> 
      <FavTeamList/>  
      <br>
    </section>

    <section v-if="showTeamNow">
        <br>
        <h2>Team now</h2>
        <TeamNowList/>
    </section>
    

</template>

<script>
import FavTeamList from '../components/fotball/FavTeamList'
import TeamNowList from '../components/fotball/TeamNowList'
export default {
    components: {FavTeamList, TeamNowList},
    setup(){
        return {FavTeamList, TeamNowList }
    },

    data:() => {
        return{
            showFav: false,
            showTeamNow: false
        }
    }
    
}
</script>