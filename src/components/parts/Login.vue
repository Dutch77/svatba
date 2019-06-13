<template>
    <div class="header">
        <input type="text" value="" v-model="code"/>
        <button v-on:click="login(code)">Vstoupit</button>
        <div class="error" v-html="error" v-if="error"></div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {AxiosError} from "axios";
    import {LoginPayload} from "../../interfaces";

    export default Vue.extend({
        data() {
            return {
                code: '' as string,
                error: '' as string
            }
        },
        methods: {
            login(code: string) {
                let payload: LoginPayload = {code: code};
                return this.$store.dispatch('login', payload)
                    .catch((e: AxiosError) => {
                        this.error = 'Zadaný kód neexistuje'
                    })
            }
        },
        mounted: function () {
        },
        computed: {

        }
    });
</script>


<style lang="scss">
    html {
        body {
            .header {
                height: 600px;
                display: flex;
                justify-content: center;
                align-items: center;

                h1 {
                    font-family: 'Parisienne', cursive;
                    color: white;
                }
            }
        }
    }
</style>
