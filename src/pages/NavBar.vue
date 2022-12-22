<template>
  <div class="navbar-c">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Taxi Online</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDNavbarropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/orders">Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/riders">Riders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/drivers">Drivers</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>