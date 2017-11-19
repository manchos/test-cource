<template>
  <div id="app">
    <nav class="navbar navbar-expand-md fixed-top ">
      <a class="navbar-brand" href="/">Vue.js course project</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav mr-auto">
            <router-link tag="li" to="/list" class="nav-item" active-class="active" exact>
              <a class="nav-link" href="">
                Список пользователей
              </a>
            </router-link>
            <router-link tag="li" to="/user/add" class="nav-item" active-class="active" exact>
              <a class="nav-link" href="">
                Добавить пользователя     
              </a>
            </router-link>
          </ul>
        </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  margin-top: 60px;
}
</style>
