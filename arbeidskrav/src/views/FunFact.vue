<template>
    <section>
        <br>
        <h1>Fakta om Manchester United</h1>
        <br>
        <ManchesterUnited/>
    </section>

    <section>
        <img id="trophy" src="../assets/pltrophy.png">
    </section>
</template>

<script>
import ManchesterUnited from '../components/fotball/ManchesterUnited'
export default {
  components: {ManchesterUnited},
    setup(){
        return {ManchesterUnited}
    }
    
}
</script>

<style>
body{
    background-color: rgb(211, 53, 53);
}
</style>
