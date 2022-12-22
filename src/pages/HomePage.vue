<template>
  <div class="home-page">
    <h1 class="mt-3">Home</h1>
    <div class="row mt-3 mb-3">
      <div class="col-sm">
        <div class="card">
          <div class="card-body">
            <h4>Orders Total</h4>
            <h3>{{orders_count}}</h3>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="card">
          <div class="card-body">
            <h4>Percent of success</h4>
            <h3>{{percent_of_success}}%</h3>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="card">
          <div class="card-body">
            <h4>Earned Total</h4>
            <h3>{{earned_amount}} EUR</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <div class="card">
          <div class="card-body">
            <h2>Top Orders</h2>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">№</th>
                  <th scope="col">Created</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Driver ID</th>
                  <th scope="col">Rirder ID</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in top_10" :key="order.id" @click="$router.push(`/orders/${order.id}`)">
                  <th scope="row">{{top_10.indexOf(order)+1}}</th>
                  <td>{{order.created_at}}</td>
                  <td>{{order.point_a.city}}, {{order.point_a.street}} {{order.point_a.building}}</td>
                  <td>{{order.point_b.city}}, {{order.point_b.street}} {{order.point_b.building}}</td>
                  <td><a :href="'/drivers/' + order.driver_id">{{order.driver_id}}</a></td>
                  <td><a :href="'/riders/' + order.rider_id">{{order.rider_id}}</a></td>
                  <td>{{order.amount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div class="col-sm-4">
        <div class="row mb-3 px-2">
          <div class="card">
            <div class="card-body">
              <h3>Top Rider</h3>
              <div class="d-flex flex-column align-items-center text-center">
                <img src="../assets/profile.png" alt="Driver" class="rounded-circle" width="150">
                <div class="mt-3">
                  <h4>{{top_rider.name}}</h4>
                  <p class="text-secondary mb-1"><strong>Completed orders:</strong> {{top_rider.orders.length}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row px-2">
          <div class="card">
            <div class="card-body">
              <h3>Top Driver</h3>
              <div class="d-flex flex-column align-items-center text-center">
                <img src="../assets/profile.png" alt="Driver" class="rounded-circle" width="150">
                <div class="mt-3">
                  <h4>{{top_driver.name}}</h4>
                  <p class="text-secondary mb-1"><strong>Completed orders:</strong> {{top_driver.orders.length}}</p>
                </div>
              </div>
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
  name: "HomePage",
  data() {
    return {
      orders_count: null,
      percent_of_success: null,
      earned_amount: null,
      top_rider: null,
      top_driver: null,
      top_10: null,
    }
  },
  methods: {
    getOrdersCount() {
      const path = 'http://localhost:5001/orders/statistics?type=orders_count';
      axios.get(path)
        .then((res) => {
          this.orders_count = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPercentOfSuccess() {
      const path = 'http://localhost:5001/orders/statistics?type=percent_of_success';
      axios.get(path)
        .then((res) => {
          this.percent_of_success = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getEarnedAmount() {
      const path = 'http://localhost:5001/orders/statistics?type=earned_amount';
      axios.get(path)
        .then((res) => {
          this.earned_amount = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getTopRider() {
      const path = 'http://localhost:5001/riders/statistics?type=top';
      axios.get(path)
        .then((res) => {
          this.top_rider = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getTopDriver() {
      const path = 'http://localhost:5001/drivers/statistics?type=top';
      axios.get(path)
        .then((res) => {
          this.top_driver = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getTop10() {
      const path = 'http://localhost:5001/orders/statistics?type=top_10_by_amount';
      axios.get(path)
        .then((res) => {
          this.top_10 = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
      this.getOrdersCount();
      this.getPercentOfSuccess();
      this.getEarnedAmount();
      this.getTopRider();
      this.getTopDriver();
      this.getTop10();
  },
}
</script>