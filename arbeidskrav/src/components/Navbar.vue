<template>
    <nav>
        <div class="nav-item">
            <router-link to="/">Hjem</router-link>
        </div>
        <div class="nav-item">
            <router-link to="/om-meg">Om meg</router-link>
        </div>
        <div class="nav-item">
            <router-link to="/fotball">Fotball</router-link>
        </div>
        <div class="nav-item">
            <router-link to="/tur">Tur</router-link>
        </div>
        <div class="nav-item">
            <router-link to="/reising">Reising</router-link>
        </div>
    </nav>
</template>

<script>


export default {
    name: 'navbar'
    }
</script>

<style>
nav{
    display: flex;
    align-content: center;
    justify-content: center;
}

nav .nav-item{
    color: #fff;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .nav-item.active,
nav .nav-item:hover{
    background-color: #444;
    border-bottom-color: #FF5858;
}

nav .nav-item a {
    color: inherit;
    text-decoration: none;
}
</style>