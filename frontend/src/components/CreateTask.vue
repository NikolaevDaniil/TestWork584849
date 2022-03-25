<template>
  <div class="container">
    <div class="row">
      <h3 class="text-center">Create Task</h3>
      <div class="row">
        <div class="col-md-6 mx-auto">
          <form @submit.prevent="addTask">
            <div class="form-group mb-3">
              <label>Title</label>
              <input type="text" class="form-control" v-model="task.title">
            </div>
            <div class="form-group">
              <label>Detail</label>
              <textarea type="text" class="form-control" v-model="task.detail"/>
            </div>
            <button type="submit" class="btn btn-primary mt-3 w-100">Create</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import apiClient from "@/service/api";

export default {
  data() {
    return {
      task: {}
    }
  },
  methods: {
    addTask() {
      apiClient
          .post('api/task', this.task)
          .then(response => (
              console.log(response),
              this.$router.push({ name: 'home' })
          ))
          .catch(err => console.log(err))
          .finally(() => this.loading = false)
    }
  }
}
</script>