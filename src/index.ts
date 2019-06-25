import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
import 'es6-promise/auto'
import Store from "./store/store";
declare function require(name:string): any;
Vue.use(require('vue-event-bus'))
import App from "./components/App.vue";

// Vue.component('app', require('./components/App.vue'));

let v = new Vue({
    el: "#app",
    store: Store,
    components: {
        'App': App
    },
    template: `<App></App>`
});