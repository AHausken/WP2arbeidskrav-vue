<template>
    <section>
        <h1>Tabellen slik den ser ut nå:</h1>
        <fotball-list/>
    </section>
</template>

<script>
import FotballList from '../components/fotball/FotballList'

export default {
  components: { FotballList },
    setup(){
        return {FotballList}
    }
    
}
</script>