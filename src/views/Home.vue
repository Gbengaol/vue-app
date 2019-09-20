<template>
  <div class="home">
    <AppHeader />
    <Ninjas v-bind:ninjas="ninjas" />
    <AppFooter />
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
      ]
    }
  }
};
</script>
