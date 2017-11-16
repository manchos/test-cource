<template>
  <div>
    User edit
    <div>{{ id }}</div>

    <user-form v-if="user" v-model="user"></user-form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserEdit',
  props: {
    id: String
  },
  components: {
    UserForm: () => import('./UserForm.vue')
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
  methods: {
    loadData () {
      axios.get(this.userUrl)
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