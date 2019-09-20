<template>
    <div id="ninja" v-on:click="toggleAndPop">
        <div v-on:click="ninja.show = !ninja.show" v-bind:key="index" v-for="(ninja, index) in ninjas">
            <h3>{{ninja.name}}</h3>
            <h4 v-show="ninja.show">Hobby: {{ninja.hobby}}</h4>
        </div>
        <slot name="first"></slot>
        <slot name="second"></slot>
    </div>
</template>

<script>
export default {
    props: {
        ninjas: {
            type: Array,
            required: true
        }
    },
    methods: {
        toggleAndPop: function(){
            this.ninjas.pop()
        }
    }
}
</script>

<style scoped lang="scss">
    #ninja{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        grid-gap: 10px;

        div {
            border: 2px solid red;
            box-sizing: border-box;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 200px;
            cursor: pointer;

            &:hover{
                background: #ccc;
            }

            h3{
                color: crimson;
            }
        }
    }
</style>