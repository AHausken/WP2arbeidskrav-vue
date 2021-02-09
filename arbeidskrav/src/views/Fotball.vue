<template>
    <section>
        <h1>Tabellen slik den ser ut nå:</h1>
        <fotball-list/>
    </section>
    <section>
        <h1>Fakta om Manchester United</h1>
        <ManchesterUnited/>
    </section>
</template>

<script>
import FotballList from '../components/fotball/FotballList'
import ManchesterUnited from '../components/fotball/ManchesterUnited'
export default {
  components: { FotballList, ManchesterUnited},
    setup(){
        return {FotballList, ManchesterUnited}
    }
    
}
</script>