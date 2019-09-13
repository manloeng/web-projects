import Home from '../components/Home.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import HelloWorld from '../components/HelloWorld.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login/', component: Login },
    { path: '/login/:id', component: HelloWorld },
];

export default routes;