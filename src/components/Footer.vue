<template>
  <footer>
    <h1> {{ groupName }}</h1><hr />
    <p> {{ title }}</p>
  </footer>
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
    created(){
        bus.$on('changeGroupName', (e) => {
            this.groupName = e;
        })
    }
}
</script>

<style scoped lang="scss">
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px; 
        width: 100%;
        position: fixed;
        bottom: 0px;
        border: 1px dotted greenyellow;
        background: linear-gradient(90deg, #ccc, #f4c604);

        p{
            color: crimson;
        }
    }
</style>