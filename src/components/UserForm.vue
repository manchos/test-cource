<template>
  <div>
    <div class="form-group">
      <label for="firstName"><strong>Имя</strong></label>
      <input class="form-control" type="text" v-model="user.firstName">
    </div>
    <div class="form-group">
      <label class="col-form-label" for="lastName"><strong>Фамилия</strong></label>
      <input class="form-control" type="text" v-model="user.lastName">
    </div>
    <div class="form-group">
      <label for="email"><strong>Email</strong></label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label class="col-form-label" for="age"><strong>Возраст</strong></label>
      <input class="form-control" type="text" v-model="user.age">
    </div>
    <div class="form-check form-check-inline">
      <strong>Активный</strong>
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" user="" v-model="user.isActive">
        <span v-if="user.isActive">Да</span>
        <span v-else>Нет</span>
      </label>
    </div>
    <div class="form-group">
      <label class="col-form-label" for="picture"><strong>Картинка</strong></label>
      <p>
        <img :src="user.picture" alt="" class="img-thumbnail" />
      </p>
      <input type="file" hidden ref="image" @change="upload" />
      <button class="btn btn-default" @click="selectNewImage">Выбрать новую</button>
      <input class="form-control" type="text" v-model="user.picture">
    </div>
    <div class="form-group">
      <label class="col-form-label" for="balance"><strong>Баланс</strong></label>
      <input class="form-control" type="text" v-model="user.balance">
    </div>
    <div class="form-group">
      <label class="col-form-label" for="phone"><strong>Телефон</strong></label>
      <input class="form-control" type="text" v-model="user.phone">
    </div>
    <div class="form-group">
      <label class="col-form-label" for="address"><strong>Адрес</strong></label>
      <input class="form-control" type="text" v-model="user.address">
    </div>
    <div class="form-group">
      <label class="col-form-label" for="company"><strong>Компания</strong></label>
      <input class="form-control" type="text" v-model="user.company">
    </div>
    <div class="form-group">
      <label class="col-form-label" for="registered"><strong>Дата регистрации</strong></label>
      <input class="form-control" type="text" v-model="user.registered">
    </div>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserForm',
  model: {
    prop: 'user'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    accessList: ['guest', 'user', 'admin']
  }),
  methods: {
    selectNewImage () {
      this.$refs.image.click()
    },
    upload () {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.image.files[0])
      // Добавляем ключ от IMGUR
      // https://api.imgur.com/oauth2/addclient
      const config = {
        headers: {
          'Authorization': 'Client-ID 408df12d6023e09'
        }
      }
      axios.post(url, data, config)
      .then(response => response.data)
      .then(response => {
        this.user.picture = response.data.link
        this.$refs.image.value = ''
      })
    }
  }
}
</script>
