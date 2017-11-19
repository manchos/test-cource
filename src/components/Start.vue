<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Vue.js course project</a>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav">
            <router-link tag="li" to="/list" class="nav-item" active-class="active" exact>
              <a class="nav-link" href="">
                Список пользователей
              </a>

            </router-link>
            <router-link tag="li" to="/user/add" active-class="active" exact>
              <a class="nav-link" href="">
                Добавить пользователя     
              </a>
            </router-link>
          </ul>

        </div>
      </div>
    </nav>  

    <!-- <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">
            Vue.js course project
          </router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="navbar-nav">
            <router-link tag="li" to="/list" class="nav-item" active-class="active" exact>
              <a class="nav-link" href="">
                Список пользователей
              </a>

            </router-link>
            <router-link tag="li" to="/user/add" active-class="active" exact>
              <a class="nav-link" href="">
                Добавить пользователя     
              </a>

            </router-link>
          </ul>
        </div>

      </div>
    </nav> -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Start',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
