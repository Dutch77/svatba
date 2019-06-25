<template>
    <div>
        <Header v-if="isLoggedIn" />
        <Login v-else />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Login from './parts/Login.vue'
    import Info from './parts/Info.vue'

    export default Vue.extend({
        name: 'AppTemplate',
        data() {
            return {}
        },
        components: {
            Login,
            Info
        },
        methods: {},
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            }
        }
    });
</script>

<style lang="scss">
    html {
        margin: 0;
        padding: 0;

        body {
            margin: 0;
            padding: 0;
            background: #333333;
        }
    }
</style>
