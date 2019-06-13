<template>
    <div>
        test
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {}
        },
        methods: {},
        computed: {
            exclamationMarks(): string {
                return 'test'
            }
        }
    });
</script>

<style>
    .greeting {
        font-size: 20px;
    }
</style>
