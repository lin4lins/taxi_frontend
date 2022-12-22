<template>
  <div class="rider-create">
    <h2 class="mt-3">Create Order</h2>
    <form class="p-3 border bg-light px-md-5">
      <div class="row">
        <div class="col-md-2">
          <label for="from_id_label" class="float-start">From</label>
          <select 
          id="from_id" 
          class="form-control" 
          v-model="order_input_data['point_a_id']">
            <option 
            v-for="address in addresses" 
            :key="address.id"
            :value="address.id"
            >
            {{address.city}}, {{address.street}} {{address.building}}
            </option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="to_id_label" class="float-start">To</label>
          <select
          id="to_id"
          class="form-control"
          v-model="order_input_data['point_b_id']">
            <option 
            v-for="address in addresses" 
            :key="address.id"
            :value="address.id"
            >
            {{address.city}}, {{address.street}} {{address.building}}
            </option>
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <label for="rider_id_label" class="float-start">Rider</label>
          <select 
          id="rider_id" 
          class="form-control" 
          v-model="order_input_data['rider_id']">
            <option 
            v-for="rider in riders" 
            :key="rider.id"
            :value="rider.id"
            >
            {{rider.name}}, {{rider.phone_number}}
            </option>
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <label for="driver_id_label" class="float-start">Driver</label>
          <select 
          id="driver_id" 
          class="form-control" 
          v-model="order_input_data['driver_id']">
            <option 
            v-for="driver in drivers" 
            :key="driver.id"
            :value="driver.id"
            >
            {{driver.name}}, {{driver.phone_number}}
            </option>
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-1">
          <label for="amount" class="float-start">Amount</label>
          <input 
          type="number" 
          class="form-control" 
          id="amount" 
          aria-describedby="amount" 
          placeholder="EUR"
          v-model.trim="order_input_data['amount']">
        </div>
      </div>
      <div class="row mt-3 form-check">
        <div class="col-md-2">
          <input 
          class="form-check-input" 
          type="checkbox" 
          id="status"
          v-model="order_input_data['status']">
          <label class="form-check-label float-start" for="status" >Completed</label>
        </div>
      </div> 
      <div class="row mt-3">
        <div class="col">
          <button type="submit" class="btn btn-primary float-start" @click="createOrder">Submit</button>
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
      addresses: "",
      riders: "",
      drivers: "",
      amount: "",
      status: "",

      order_input_data: {
        point_a_id: "",
        point_b_id: "",
        rider_id: "",
        driver_id: "",
        amount: "",
        status: false
      }
    }
  },
  validations () {
    return {
      order_input_data: {
        from_id: { required },
        to_id: { required },
        rider_id: { required },
        driver_id: { required },
        amount: { required },
        status: { required },
      }
    }
  },
  methods: {
    getAddresses() {
    const path = 'http://localhost:5001/address/';
    axios.get(path)
      .then((res) => {
        this.addresses = res.data;
      })
      .catch((error) => {
        console.error(error);
      });
    },
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
    createOrder() {
      const path = "http://localhost:5001/orders/";
      axios.post(path, this.order_input_data)
      .then(
        this.$router.push('/orders')
      )
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    }
  },
  created() {
    this.getAddresses();
    this.getRiders();
    this.getDrivers();
  },
  setup () {
    return { v$: useVuelidate() }
  },
}
</script>