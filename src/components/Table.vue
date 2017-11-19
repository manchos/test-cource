<template>
  <div>
    <b>Списое пользователей</b>
    <table class="table table-sm" id="userstable">
      <thead>
        <tr >
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Активен</th>
          <th>Баланс</th>
          <th>email</th>
          <th>Телефон</th>
          <th>Зарегистрирован</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td >
            <router-link :to="`/user/${user.id}`"># {{ user.id }}</router-link>
          </td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.isActive }}</td>
          <td>{{ user.balance }}</td>      
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.registered }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Table',
  data: () => ({
    url: 'http://localhost:3000/users/',
    users: []
  }),
  methods: {
    loadData () {
      axios.get(this.url)
        .then(response => {
          this.users = response.data
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
