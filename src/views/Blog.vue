<template>
  <div id="blog-layout">
      <div id="form-layout">
          <form v-show="!submitted">
              <input type="text" v-model.lazy="blog.title" placeholder="Enter your name" required/>
              <textarea id="textarea" v-model.lazy="blog.comment" placeholder="Enter your comment">
              </textarea>
              <p>Select Blog Category:</p>
              <div id="checkboxes">
                  <label>Technology</label>
                  <input type="checkbox" value="Technology" v-model="blog.blogCategories" />
                  <label>Sports</label>
                  <input type="checkbox" value="Sports" v-model="blog.blogCategories" />
                  <label>Music</label>
                  <input type="checkbox" value="Music" v-model="blog.blogCategories" />
              </div>
              <label>Select an Author:</label>
              <select v-model="blog.author">
                <option v-bind:key="author" v-for="(author) in authors">{{ author }}</option>
              </select>
              <button class="btn btn-success" v-on:click.prevent="submitButton">Submit</button>
          </form>
          <div id="show-blog" v-show="submitted" class="alert alert-danger alert-dismissible out">
              <h4>Blog has been posted...</h4>
          </div>          

          <div id="blog-preview">
            <h2>Blog Preview</h2>
            <h5>Name: {{blog.title}}</h5>
            <h5>Comment: {{blog.comment}}</h5>
            <h5>Selected Categories</h5>
                <ul>
                    <li v-bind:key="category" v-for="category in blog.blogCategories">{{category}}</li>
                </ul>
            <h5>Author: {{ blog.author }}</h5>
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
                blogCategories: [],
                author: ''
            },
            submitted: false,
            authors: ['Gbenga Olufeyimi', 'Owolabi Timothy', 'Ayoola Oluwatosin']
        }
    },
    methods: {
        submitButton(){
            this.submitted = true;
        }
    }
}
</script>

<style scoped lang="scss">
    @mixin form-fields {
        border: 1px solid black;
        width: 100%;
        border-radius: 5px;
        margin: 5px 0;
        padding: 5px;
    }
    #blog-layout{
        background: #727271;
        min-height: 60vh;
        overflow-y: scroll;
        margin-bottom: 5%;
    }
    #form-layout{
        position: relative;
        width: 70%;
        left: 15%;

        input[type="text"]{
            @include form-fields;
            height: 40px;
        }
        #textarea{
            @include form-fields;
            height: 100px;
        }
        select{
            @include form-fields;
            display: block;
            height: 40px;
        }

        #show-blog{
            background: crimson;
            border-radius: 5px;
            margin-top: 10px;

            .out {
                opacity: 0;
                animation: notification 5s linear 1;
            }

            @keyframes notification {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: .5;
                }
                100% {
                    opacity: 0;
                }
            }
        }

        #blog-preview{
            text-align: left;
            color: whitesmoke;
            border: 2px solid #ff0014;
            margin: 5% 0;
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