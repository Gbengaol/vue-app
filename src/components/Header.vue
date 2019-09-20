<template>
  <Header>
      <h3> {{ title }}</h3>
  </Header>
</template>

<script>
export default {
    data: function (){
        return {
            title: 'My First Vue.js App. It only shows a list of Ninjas and their hobbies'
        }
        
    }
}
</script>

<style scoped lang="scss">
    Header {
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