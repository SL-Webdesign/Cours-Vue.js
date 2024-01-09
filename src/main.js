import {createRouter, createWebHistory} from 'vue-router';

import HelloWorld from './components/Formulaire/HelloWorld.vue';
import TheWelcome from './components/Formulaire/TheWelcome.vue';
import Todo from './components/Formulaire/Todo.vue';
import Contact from './components/Formulaire/Contact.vue';
import Inscription from './components/Formulaire/Inscription.vue';
import App from './App.vue';
import * as Vue from 'vue';

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/about',
        component: TheWelcome
    },
    {
        path: '/todo',
        component: Todo
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/inscription',
        component: Inscription
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');
