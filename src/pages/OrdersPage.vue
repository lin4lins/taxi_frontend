<template>
  <div class="riders">
    <div class="row">
      <div class="col-md-12 mt-3">
        <h2>Orders</h2>
        </div>
    </div> 
    <div class="row">
      <div class="col"></div>
      <div class="col-md-2 mb-3">
      <button type="button" class="btn btn-primary" @click="$router.push('/orders/create')">Create Order</button>
      </div>
    </div> 
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Created</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Driver ID</th>
          <th scope="col">Rirder ID</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" @click="$router.push(`/orders/${order.id}`)">
          <th scope="row">{{order.id}}</th>
          <td>{{order.created_at}}</td>
          <td>{{order.point_a.city}}, {{order.point_a.street}} {{order.point_a.building}}</td>
          <td>{{order.point_b.city}}, {{order.point_b.street}} {{order.point_b.building}}</td>
          <td><a :href="'/drivers/' + order.driver_id">{{order.driver_id}}</a></td>
          <td><a :href="'/riders/' + order.rider_id">{{order.rider_id}}</a></td>
          <td>{{order.amount}}</td>
          <td v-if="!order.status">Failed</td>
          <td v-if="order.status">Completed</td>
        </tr>
      </tbody>
    </table>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "OrdersPage",
  data() {
    return {
      orders: "",
    }
  },
  methods: {
    getOrders() {
      const path = 'http://localhost:5001/orders/';
      axios.get(path)
        .then((res) => {
          this.orders = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
      this.getOrders();
  },
}
</script>
