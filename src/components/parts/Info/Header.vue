<template>
    <div class="header">
        <h1>Lucie & Michal</h1>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {}
        },
        methods: {},
        mounted: function () {
        },
        computed: {
            exclamationMarks(): string {
                return 'test'
            }
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
