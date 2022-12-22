<template>
  <div class="drivers">
    <div class="row">
      <div class="col-md-12 mt-3">
        <h2>Drivers</h2>
        </div>
    </div> 
    <div class="row">
      <div class="col"></div>
      <div class="col-md-2 mb-3">
      <button type="button" class="btn btn-primary" @click="$router.push('/drivers/create')">Create Driver</button>
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
        <tr v-for="driver in drivers" :key="driver.id" @click="$router.push(`/drivers/${driver.id}`)">
          <th scope="row">{{driver.id}}</th>
          <td>{{driver.name}}</td>
          <td>{{driver.phone_number}}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "DriversPage",
  data() {
    return {
      drivers: "",
    }
  },
  methods: {
    getDrivers() {
      const path = 'http://localhost:5001/drivers/';
      axios.get(path)
        .then((res) => {
          this.drivers = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
      this.getDrivers();
  },
}
</script>
