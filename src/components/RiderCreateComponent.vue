<template>
  <div class="rider-create">
    <h2 class="mt-3">Create Driver</h2>
    <form class="p-3 border bg-light px-md-5">
      <div class="row mb-3">
        <div class="form-group col-md-2">
          <label for="name" class="float-start">Name</label>
          <input 
          type="text" 
          class="form-control" 
          id="name" 
          placeholder="John Doe"
          v-model.trim="rider_input_data['name']">
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
          v-model.trim="rider_input_data['phone_number']">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-primary float-start" @click="createRider">Submit</button>
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
      rider_input_data: {
        name: "",
        phone_number: "",
      }
    }
  },
  validations () {
    return {
      rider_input_data: {
        name: { required },
        phone_number: { required },
      }
    }
  },
  methods: {
    createRider() {
      const path = "http://localhost:5001/riders/";
      axios.post(path, this.rider_input_data)
      .then(
        this.$router.push('/riders')
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

