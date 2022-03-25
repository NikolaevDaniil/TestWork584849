<template>
  <div>
    <h3 class="text-center">Edit Product</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <form @submit.prevent="updateTask">
            <div class="form-group mb-3">
              <label>Name</label>
              <input type="text" class="form-control" v-model="task.title">
            </div>
            <div class="form-group">
              <label>Detail</label>
              <textarea type="text" class="form-control" v-model="task.detail"/>
            </div>
            <button type="submit" class="btn btn-primary mt-3 w-100">Update</button>
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
  created() {
    apiClient
        .get(`/api/task/${this.$route.params.id}`)
        .then((res) => {
          this.task = res.data;
        });
  },
  methods: {
    updateTask() {
      apiClient
          .put(`api/task/${this.$route.params.id}`, this.task)
          .then((res) => {
            console.log(res)
            this.$router.push({ name: 'home' });
          });
    }
  }
}
</script>