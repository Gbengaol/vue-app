<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/about" exact>About</router-link></li>
        <li><router-link to="/blog" exact> Add Blog</router-link></li>
        <li><router-link to="/blogs" exact> View Blogs</router-link></li>
      </ul>      
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 15%;
  min-height: 100vh;
}
#nav {
  padding-top: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    background: linear-gradient(90deg, #ff0014, #faa831);
    padding: 10px;
  }
  li{
    list-style: none;
  }
}
</style>
