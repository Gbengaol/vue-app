<template>
  <div id="blogs-body">
      <h1 v-randomColorDirective>Dummy Blogs from JSON Placeholder</h1>
      <input type="search" placeholder="Search blogs" v-model="searchBlog" />
      <div v-bind:key="blog.title" v-for="blog in filteredBlogs">
          <h3 v-randomColorDirective> {{ blog.title | toUpperCase }} </h3>
          <p> {{ blog.body | toSnippet }}</p>
      </div>
  </div>
</template>

<script>
import searchMixins from '../mixins/mixins';
export default {
    data() {
        return {
            blogs: [],
            searchBlog: ''
        }
    }, 
    beforeCreate(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            this.blogs = data.slice(0,15)
        })
    },
    computed: {
        
    },
    filters: {
        toUpperCase(value){           
            return `${value.toUpperCase()}`;
        }
    },
    directives: {
        'randomColorDirective':{
            bind(el, binding, vnode){
                el.style.color = `#${Math.random().toString().slice(2,8)}`;
            }
        }
    },
    mixins: [searchMixins]
}
</script>

<style scoped lang="scss">
    #blogs-body{
        margin: 0 auto;
        max-width: 800px;

        input[type="search"]{
            width: 80%;
            border-radius: 5px;
            height: 50px;
            padding: 10px;
        }

        div{
            background: #727271;
            border-radius: 5px;
            margin: 10px 0;
            padding: 10px;
            box-sizing: border-box;

            p{
                color: #000;
            }

            h3{
                color: #fff;
            }
        }
    }
</style>