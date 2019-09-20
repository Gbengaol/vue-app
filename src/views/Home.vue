<template>
  <div class="home">
    <button class="btn btn-success" v-on:click="component = 'AppFooter'"> Show Footer</button>
    <button class="btn btn-warning" v-on:click="component = 'AppHeader'"> Show Header</button>
    <keep-alive>
      <component v-bind:is="component" v-bind:title="title" v-bind:groupName="groupName" v-on:changeTitle="changeTitle($event)"> </component>
    </keep-alive>
    <!-- <AppHeader v-bind:title="title" v-bind:groupName="groupName" v-on:changeTitle="changeTitle($event)" /> -->
    <Ninjas v-bind:ninjas="ninjas">
      <h1 slot="first">This is first slot</h1>
      <p slot="second">This is the second slot</p>
    </Ninjas>
    <!-- <AppFooter v-bind:title="title" v-bind:groupName="groupName" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ninjas from '../components/Ninjas';

export default {
  name: "home",
  components: {
    'AppHeader': Header,
    'AppFooter': Footer,
    'Ninjas': Ninjas
  },
  data: function(){
    return {
      title: 'My First Vue.js App. It only shows a list of Ninjas and their hobbies',
      groupName: '3Line Card Management Limited',
      ninjas: [
        {
            name: 'Gbenga', hobby: 'Chilling', show: false
        },
        {
            name: 'Owolabi', hobby: 'Drinking', show: false  
        },
        {
            name: 'Tosin', hobby: 'Coding', show: false
        },
        {
            name: 'Kola', hobby: 'Womanizing', show: false
        },
        {
            name: 'Johnny', hobby: 'Laughing', show: false  
        },
        {
            name: 'Sylvester', hobby: 'Singing', show: false
        }
      ],
      component: 'AppHeader'
    }
  },
  methods: {
    changeTitle: function(event){
      this.title = event;
    }
  }
};
</script>
<style scoped>
  h1{
    color: greenyellow;
  }
  p{
    color: brown;
  }
</style>