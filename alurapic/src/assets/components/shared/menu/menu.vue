<template>
    <nav class="menu-nav">
      <ul class="menu">
        <li v-for="rota in rotas">
          <router-link class="menu-item" :to="rota.path ? rota.path : '/' ">{{ rota.titulo }}</router-link>
        </li>
        <div class="titulo">
          <h1>{{ titulo }}</h1>
        </div>
      </ul>
    </nav>
</template>

<script>

export default {

   props: ['rotas'],

  data() {
  
    return {
      titulo: 'AluraPic',
    }
  }
}

</script>

<style>

 .titulo {
  color: red;
 }

 .menu{
    display: flex;
    margin: 1em;
    padding: 2em;
    background: #f9f9f9;
    flex-direction: column-reverse;
    align-items: center;
 }

 .menu-item{
  text-decoration: none;
  color: black;
  padding: 1em;
 }

 li{
  list-style-type: none
 }

</style>