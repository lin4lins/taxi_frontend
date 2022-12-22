<template>
  <div class="riders">
    <div class="row">
      <div class="col-md-12 mt-3">
        <h2>Riders</h2>
        </div>
    </div> 
    <div class="row">
      <div class="col"></div>
      <div class="col-md-2 mb-3">
      <button type="button" class="btn btn-primary" @click="$router.push('/riders/create')">Create Rider</button>
      </div>
    </div> 
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rider in riders" :key="rider.id" @click="$router.push(`/riders/${rider.id}`)">
          <th scope="row">{{rider.id}}</th>
          <td>{{rider.name}}</td>
          <td>{{rider.phone_number}}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "RidersPage",
  data() {
    return {
      riders: "",
    }
  },
  methods: {
    getRiders() {
      const path = 'http://localhost:5001/riders/';
      axios.get(path)
        .then((res) => {
          this.riders = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
      this.getRiders();
  },
}
</script>
