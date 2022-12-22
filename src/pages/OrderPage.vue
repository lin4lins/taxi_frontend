 <template>
  <div class="container">
    <h2>Order Info</h2>
    <div class="main-body">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="row mb-3  ">
            <div class="card">
              <div class="card-body" @click="$router.push(`/riders/${rider.id}`)">
                <div class="d-flex flex-column align-items-center text-center">
                  <img src="../assets/profile.png" alt="Rider" class="rounded-circle" width="150">
                  <div class="mt-3">
                    <h3>Rider</h3>
                    <h4>{{rider.name}}</h4>
                    <p class="text-secondary mb-1"><strong>ID:</strong> {{rider.id}}</p>
                    <p class="text-muted font-size-sm"><strong>Phone:</strong> {{rider.phone_number}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card">
              <div class="card-body" @click="$router.push(`/drivers/${driver.id}`)">
                <div class="d-flex flex-column align-items-center text-center">
                  <img src="../assets/profile.png" alt="Driver" class="rounded-circle" width="150">
                  <div class="mt-3">
                    <h3>Driver</h3>
                    <h4>{{driver.name}}</h4>
                    <p class="text-secondary mb-1"><strong>ID:</strong> {{driver.id}}</p>
                    <p class="text-muted font-size-sm"><strong>Phone:</strong> {{driver.phone_number}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">ID</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{order.id}}
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  fip@jukmuh.al
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  (239) 816-9029
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Mobile</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  (320) 380-4539
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  Bay Area, San Francisco, CA
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-12">
                  <a class="btn btn-danger" @click="deleteOrder">Delete</a>
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
  name: "OrderPage",
  data() {
    return {
      order: "",
      driver: "",
      rider: ""
    }
  },
  methods: {
    getOrder() {
      const path1 = `http://localhost:5001/orders/${this.$route.params.id}`;
      axios.get(path1)
         .then((res) => {
          this.order = res.data;
          const driver_id = res.data.driver_id;
          const rider_id = res.data.rider_id;

          const path2 = `http://localhost:5001/drivers/${driver_id}`;
            axios.get(path2)
              .then((res) => {
                this.driver = res.data;
              })
              .catch((error) => {
                console.error(error);
              });

          const path3 = `http://localhost:5001/riders/${rider_id}`;
            axios.get(path3)
              .then((res) => {
                this.rider = res.data;
              })
              .catch((error) => {
                console.error(error);
              });
         })
        .catch((error) => {
           console.error(error);
         });
    },
    deleteOrder() {
      const path = `http://localhost:5001/orders/${this.$route.params.id}`;
      axios.delete(path)
        .then(
          this.$router.push('/orders')
        )
        .catch((error) => {
           console.error(error);
         });
    },
  },
  created() {
    this.getOrder();
  },
}
</script>