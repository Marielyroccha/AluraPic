import Cadastro from './assets/components/cadastro/Cadastro.vue';
import Home from './assets/components/Home/Home.vue';

export const routes = [
    { path: '', component: Home, titulo: 'Home'},
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}
];