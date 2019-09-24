<template>
  <Header class="header">
    <h1 v-on:click="changeGroupName"> {{ groupName }}</h1><hr />
    <h3 v-on:click="changeTitle"> {{ title }}</h3>
  </Header>
</template>

<script>
import { bus } from '../main';
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        groupName: {
            type: String,
            required: true
        }
    },
    methods: {
        changeTitle: function(){
            this.$emit('changeTitle', 'Gbenga changed this')
        },
        changeGroupName: function(){
            this.groupName = 'Freedom Network'
            bus.$emit('changeGroupName', 'Freedom Network')
        }
    }
}
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px; 
        width: 100%;
        border: 1px dotted greenyellow;
        margin: 0 auto;
        background: linear-gradient(90deg, #ccc, #f4c604);

        h3{
            color: crimson;
        }
    }
</style>