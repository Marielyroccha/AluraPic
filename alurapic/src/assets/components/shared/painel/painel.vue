<template>      
      <div class="card" style="width: 18rem;"> 
        <div class="card-body">
            <h4 class="card-title" @dblclick="visivel = !visivel">{{ titulo }}</h4>
            <transition name="painel-fade">
                <div class="painel-conteudo"  v-show="visivel">
                    <slot></slot>
                </div>
            </transition>
          </div>
        </div> 
  </template>
  
  <script>
  export default {
    
    props: ['titulo'],

    data() {
        return {
            visivel: true
        }
    }

  }
  </script>
  
  <style>
  
    /* estilo do painel */ 

    .card-body{
      width: 300px;
      height: 300px;
      background: #f9f9f9;
      border: solid 1px red;
    }

    .card {
      margin: 1em;
    }

    h4 {
      text-align: center;
    }
  
     .painel {
      padding: 0 auto;
      border: solid 2px grey;
      display: inline-block;
      margin: 5px;
      box-shadow: 5px 5px 10px grey;
      width: 200px;
      height: 100%;
      vertical-align: top;
      text-align: center;
    }
  
    .painel .painel-titulo {
      text-align: center;
      border: solid 2px;
      background: lightblue;
      margin: 0 0 15px 0;
      padding: 10px;
      text-transform: uppercase;
    }

    .painel-fade-enter, .painel-fade-leave-active {

        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active {

        transition: opacity .4s;
    }
  
  </style>
  
  