<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <form action="#" @submit.prevent="submit">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="text" name="email" id="email"  class="form-control"  v-model="form.email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" name="password" id="password" class="form-control"  v-model="form.password">
          </div>
          <div>
            <button type="submit" class="btn btn-success w-100">
              Login
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>

</template>
<script>

import { mapActions } from 'vuex'

export default {
  name: 'LoginView',

  data () {
    return {
      form: {
        email: 'test@test.com',
        password: '123123',
      }
    }
  },

  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),

    async submit () {
      await this.signIn(this.form)

      this.$router.replace({ name: 'home' })
    }
  }
}
</script>
