<template>
  <div id="app">
  
    <header>
      <Navbar/>
    </header>

    <article>
      <router-view></router-view>
    </article>
  </div>

</template>


<script>

import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat' sans-serif;
  text-align: center;
}

header{
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>
