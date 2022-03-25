<template>
  <div class="container">
    <div class="row">
      <h2 class="text-center">Task List</h2>

      <table class="table text-center">
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Detail</th>
           <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.detail }}</td>
          <td>
            <div class="btn-group" role="group">
              <router-link :to="{name: 'edit', params: { id: task.id }}" class="btn btn-success">Edit</router-link>
              <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import apiClient from "@/service/api";

export default {
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    apiClient.get('api/task').then(response => {
      this.tasks = response.data
    })
  },
  methods: {
    deleteTask(id) {
      apiClient
          .delete(`api/task/${id}`)
          .then(response => {
            console.log(response)
            let i = this.tasks.map(data => data.id).indexOf(id);
            this.tasks.splice(i, 1)
          });
    }
  }
}
</script>