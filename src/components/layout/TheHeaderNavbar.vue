<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <a href="#" class="navbar-brand">Cinema+</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#headerNavbar"
      aria-controls="headerNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="headerNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" tag="a" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/directors" tag="a" class="nav-link">Directors</router-link>
        </li>
        <div class="nav-item">
          <router-link to="/actors" tag="a" class="nav-link">Actors</router-link>
        </div>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Categories</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/" tag="a" class="dropdown-item">Action</router-link>
            <router-link to="/" tag="a" class="dropdown-item">Horror</router-link>
            <router-link to="/" tag="a" class="dropdown-item">Comedy</router-link>
            <router-link to="/" tag="a" class="dropdown-item">Animated</router-link>
          </div>
        </li>
      </ul>
      <a href="#" class="text-muted">Login</a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>