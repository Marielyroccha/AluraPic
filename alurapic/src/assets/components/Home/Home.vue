<template>

    <div>
      <div class="busca">
        <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtrar">
      </div>
      <ul class="lista">
        <li class="lista-item" v-for="foto of fotosComFiltro">    
          
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
            <meu-botao type="button" class="btn btn-danger" rotulo="Remover" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo"/>
          </meu-painel>
            
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import Painel from '../shared/painel/painel.vue';
  import imagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva.vue';
  import Botao from '../shared/botao/botao.vue';
  
  export default {
  
    components: {
      'meu-painel': Painel,
      'imagem-responsiva': imagemResponsiva,
      'meu-botao' : Botao
    },
    
    data() {
  
      return {
  
        titulo: 'AluraPic',
        fotos: [],
        filtro: ''
      }
    },
  
    computed: {

      fotosComFiltro() {

        if(this.filtro) {
          let exp = new RegExp(this.filtro.trim(), 'i')
          return this.fotos.filter(foto => exp.test(foto.titulo))
        } else {
          return this.fotos;
        }
      }
    },

    methods: {

      remove(foto) {
          alert('Remover a foto' + foto.titulo);
      }
    },
  
    created() {
  
     this.$http.get('http://localhost:3000/v1/fotos')  
      .then(res => res.json())                          
      .then(fotos => this.fotos = fotos,
       err => console.log(err));                      
  
    }
  }
  </script>
  
   <style scoped>           
    
  
    .lista {
      list-style: none;
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 2em;
    }
  
    .lista-item {
      display: inline-block;
    }
  
    .filtro {
      display: block;
      width: 50%;
      text-align: center;
      margin-top: 2em;
      background: url(../../../icons8-pesquisar.svg) no-repeat;
      background-size: 1.4em;
      background-position: right;
    }

    .busca {
      display: flex;
      justify-content: center;
    }
  
  
  
  </style>
  
  