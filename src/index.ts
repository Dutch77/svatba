import Vue from "vue";
import AppTemplate from "./components/AppTemplate.vue";

let v = new Vue({
    el: "#app",
    template: `<AppTemplate/>`,
    components: {
        AppTemplate
    }
});