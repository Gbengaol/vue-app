<template>
  <footer>
      <p> {{ copyright }}</p>
  </footer>
</template>

<script>
export default {
    data: function(){
        return {
            copyright: 'This App was developed by Gbenga Olufeyimi'
        }
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