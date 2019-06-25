<template>
    <div class="header">
        <input type="text" v-model="code"/>
        <button v-on:click="login(code)">Vstoupit</button>
        <div class="error" v-html="error" v-if="error"></div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {LoginPayload, UserProfile} from "../../interfaces";
    import {InvalidCodeError} from "../../errors/InvalidCodeError";

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
                    .then((userProfile: UserProfile) => {
                        this.error = ''
                    })
                    .catch((e: InvalidCodeError) => {
                        this.error = e.message
                    })
            }
        },
        mounted: function () {
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
