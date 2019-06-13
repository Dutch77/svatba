import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
import 'es6-promise/auto'
import Store from "./store/store";
declare function require(name:string): any;
Vue.use(require('vue-event-bus'))
import AppTemplate from "./components/AppTemplate.vue";

Vue.component('app-template', require('./components/AppTemplate.vue'));

let v = new Vue({
    el: "#app",
    store: Store,
    components: {
        'app-template': AppTemplate
    },
    template: `<app-template></app-template>`
});