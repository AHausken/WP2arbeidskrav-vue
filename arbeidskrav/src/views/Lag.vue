<template>
    <h1>All time favoritt lag VS laget i 2021</h1>
    <br>

    <input type="button" @click="showFav =! showFav" value="Trykk for favoritt lag">

    

    <section v-if="showFav">
       <h2>All Time Favs</h2> 
      <FavTeamList/>  
    </section>
    

</template>

<script>
import FavTeamList from '../components/fotball/FavTeamList'
export default {
    components: {FavTeamList},
    setup(){
        return {FavTeamList}
    },

    data:() =>{
        return{
            showFav: false
        }
    }
    
}
</script>

<style scoped>

</style>