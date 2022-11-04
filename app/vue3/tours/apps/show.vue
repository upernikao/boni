<script>

import componentDropDown from "BoniVue/boni/components/header.vue"

export default {
    data(){
        return {}
    },
    mounted(){
        console.log("show mounted");
    },
    components: {
        test: componentDropDown
    }
}
</script>
<template>
    <h1>show mounted</h1>
    <test :options="['option 1', 'option 2']"/>
</template>