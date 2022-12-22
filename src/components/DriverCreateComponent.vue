<template>
  <div class="rider-create">
    <h2 class="mt-3">Create Driver</h2>
    <form class="p-3 border bg-light px-md-5">
      <div class="row">
        <div class="col">
          <h3 class="float-start">Driver Info</h3>
        </div>
      </div>
      <div class="row mb-3">
        <div class="form-group col-md-2">
          <label for="name" class="float-start">Name</label>
          <input 
          type="text" 
          class="form-control" 
          id="name" 
          placeholder="John Doe"
          v-model.trim="driver_input_data['name']">
        </div>
      </div>
      <div class="row mb-3">
        <div class="form-group col-md-2">
          <label for="phone_number" class="float-start">Phone Number</label>
          <input 
          type="tel" 
          class="form-control" 
          id="phone_number" 
          aria-describedby="phone_number" 
          placeholder="+48 12 345 67 89"
          v-model.trim="driver_input_data['phone_number']">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h3 class="float-start">Car Info</h3>
        </div>
      </div>
      <div class="row mb-3">
        <div class="form-group col-md-2">
          <label for="license_plate" class="float-start" >License Plate</label>
          <input 
          type="text" 
          class="form-control" 
          id="license_plate" 
          aria-describedby="license_plate" 
          placeholder="ABC 123DE"
          v-model.trim="driver_input_data['license_plate']">
        </div>
        <div class="form-group col-md-2">
          <label for="model" class="float-start">Model</label>
          <input 
          type="text" 
          class="form-control" 
          id="model" 
          aria-describedby="model" 
          placeholder="Daewoo Lanos"
          v-model.trim="driver_input_data['model']">
        </div>
        <div class="form-group col-md-2">
          <label for="color" class="float-start">Color</label>
          <input 
          type="text" 
          class="form-control" 
          id="color" 
          aria-describedby="color" 
          placeholder="black"
          v-model.trim="driver_input_data['color']">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-primary float-start" @click="createDriver">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: "RiderCreateComponent",
  data() {
    return {
      driver_input_data: {
        name: "",
        phone_number: "",
        license_plate: "",
        model: "",
        color: ""
      }
    }
  },
  validations () {
    return {
      driver_input_data: {
        name: { required },
        phone_number: { required },
        license_plate: { required },
        model: { required },
        color: { required },
      }
    }
  },
  methods: {
    createDriver() {
      const path = "http://localhost:5001/drivers/";
      axios.post(path, this.driver_input_data)
      .then(
        this.$router.push('/drivers')
      )
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
}
</script>