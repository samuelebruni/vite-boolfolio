<script>
export default {
  name: 'App'
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Portfolio 🌟</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contacts 📞</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects 🚀</router-link>
            </li>
          </ul>
          <form class="d-flex my-2 my-lg-0">
            <input class="form-control me-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  </header>


  <main>
    <router-view></router-view>
  </main>


  <footer>
    <div class="bg-dark">
      <div class="d-flex text-white justify-content-around p-4">
        <div>
          <ul class="list-unstyled">
            <li>Home</li>
            <li>Contact</li>
            <li>About Me</li>
            <li>Home</li>
            <li>Contact</li>
            <li>About Me</li>
          </ul>
        </div>
        <div>
          <ul class="list-unstyled">
            <li>Home</li>
            <li>Contact</li>
            <li>About Me</li>
            <li>Home</li>
            <li>Contact</li>
            <li>About Me</li>
          </ul>
        </div>
        <div>
          <ul class="list-unstyled">
            <li>Home</li>
            <li>Contact</li>
            <li>About Me</li>
            <li>Home</li>
            <li>Contact</li>
            <li>About Me</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

