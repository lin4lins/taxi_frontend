<template>
  <div class="container">
    <h2>Rider Info</h2>
    <div class="main-body">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img src="../assets/profile.png" alt="Rider" class="rounded-circle" width="150">
                <div class="mt-3">
                  <h4>{{rider.name}}</h4>
                  <p class="text-secondary mb-1"><strong>ID:</strong> {{rider.id}}</p>
                  <p class="text-muted font-size-sm"><strong>Phone:</strong> {{rider.phone_number}}</p>
                  <button class="btn btn-danger" @click="deleteRider">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <h4>Orders</h4>
              <hr>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Created</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
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
                    <td>{{order.amount}}</td>
                    <td v-if="!order.status">Failed</td>
                    <td v-if="order.status">Completed</td>
                  </tr>
                </tbody>
              </table>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "RiderPage",
  components: {
  },
  data() {
    return {
      rider: "",
      orders: "",
    }
  },
  methods: {
    getRider() {
      const path = `http://localhost:5001/riders/${this.$route.params.id}`;
      axios.get(path)
        .then((res) => {
          this.rider = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getRiderOrders() {
      const path = `http://localhost:5001/orders/search?rider_id=${this.$route.params.id}`;
      axios.get(path)
        .then((res) => {
          this.orders = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteRider() {
      const path = `http://localhost:5001/riders/${this.$route.params.id}`;
      axios.delete(path)
        .then(
          this.$router.push('/riders')
        )
        .catch((error) => {
           console.error(error);
         });
    },
  },
  created() {
      this.getRider();
      this.getRiderOrders();
  },
}
</script>