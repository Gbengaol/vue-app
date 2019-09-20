<template>
  <div id="blog-layout">
      <div id="form-layout">
          <form>
              <input type="text" v-model.lazy="blog.title" placeholder="Enter your name" required/>
              <textarea id="textarea" v-model.lazy="blog.comment" placeholder="Enter your comment">
              </textarea>
              <div id="checkboxes">
                  <label>Technology</label>
                  <input type="checkbox" value="Technology" v-model="blog.blogCategories" />
                  <label>Sports</label>
                  <input type="checkbox" value="Sports" v-model="blog.blogCategories" />
                  <label>Music</label>
                  <input type="checkbox" value="Music" v-model="blog.blogCategories" />
              </div>
              <button class="btn btn-success" v-on:click.prevent="submitButton">Submit</button>
          </form>

          <div id="blog-preview">
            <h2>Preview Blog</h2>
            <h5>Name: {{blog.title}}</h5>
            <h5>Comment: {{blog.comment}}</h5>
            <h5>Selected Categories</h5>
                <ul>
                    <li v-bind:key="category" v-for="category in blog.blogCategories">{{category}}</li>
                </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            blog: {
                title: '',
                comment: '',
                blogCategories: []
            }
        }
    },
    methods: {
        submitButton(){
            alert('hi')
        }
    }
}
</script>

<style scoped lang="scss">
    @mixin form-fields {
        border: 1px solid black;
        width: 100%;
        border-radius: 5px;
        height: 250px;
        margin: 10px 0;
        padding: 5px;
    }
    #blog-layout{
        background: #727271;
        min-height: 82vh;
        overflow-y: scroll;
    }
    #form-layout{
        position: relative;
        width: 70%;
        left: 15%;

         input[type="text"]{
        @include form-fields;
        height: 50px;
        }
        #textarea{
            @include form-fields;
            height: 100px;
        }

        #blog-preview{
            text-align: left;
            color: whitesmoke;
            border: 2px solid #ff0014;
            margin-top: 5%;
            padding: 10px;

            h2{
                text-align: center;
                color: #ff0014;
            }
        }        

        #checkboxes {
            @mixin checkbox{
                display: inline-block;
                text-align: left;
            }
            input {
            @include checkbox;
                margin-right: 50px;
            }

            label {
                margin-right: 5px;
            }
        }
        
        
    }
</style>