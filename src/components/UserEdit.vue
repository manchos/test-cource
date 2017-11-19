<template>
  <div>
    <div v-if="!user" class="alert alert-warning">
      <i class="fa fa-refresh fa-spin"></i>
       Загрузка
    </div>
    <div v-else class="card">
      <div class="card-header text-white bg-primary" >
        <router-link :to="'/user/' + (parseInt(user.id,10)+1)">+1</router-link>
        Редактирование пользователя <span class="float-right">{{user.id}}</span>
        
      </div>
      <div class="card-body">
        <form>
          <user-form v-model="user"></user-form>
          <button type="button" class="btn btn-success" @click="save">
            Сохранить изменения
          </button>
          <button type="button" class="btn btn-danger" @click="remove">
            Удалить пользователя
          </button>
        </form>     
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from './UserForm.vue'

export default {
  name: 'UserEdit',
  props: {
    id: String
  },
  components: {
    // UserForm: () => import('./UserForm.vue')
    UserForm
  },
  data: () => ({
    url: 'http://localhost:3000/users/',
    user: null
  }),
  computed: {
    userUrl () {
      return `${this.url}${this.id}`
    }
  },
  beforeRouteUpdate (to, from, next) {
    // вызывается когда маршрут, что рендерит этот компонент изменился,
    // но этот компонент будет повторно использован в новом маршруте.
    // Например, для маршрута с динамическими параметрами `/foo/:id`, когда мы
    // перемещаемся между `/foo/1` и `/foo/2`, экземпляр того же компонента `Foo`
    // будет использован повторно, и этот хук будет вызван когда это случится.
    // Также имеется доступ в `this` к экземпляру компонента.
    this.loadData()
    next()
  },
  methods: {
    loadData (loadUrl = this.userUrl) {
      axios.get(loadUrl)
        .then(response => {
          this.user = response.data
        })
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style>

</style>