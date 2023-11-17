<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'App',

  components: {
    ProjectCard,
  },
  data() {

    return {
      baseUrl: 'http://127.0.0.1:8000/',
      projectApi: 'api/project',
      projects: []
    }

  },

  mounted() {
    axios.get(this.baseUrl + this.projectApi)
      .then(response => {
        console.log(response);
        this.projects = response.data.result.data
      }).catch(err => {
        console.error(err);
      })
  }

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
              <a class="nav-link active" href="#" aria-current="page">Home<span
                  class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact 📞</a>
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
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Show my projects</h1>
          <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in
            previous
            versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button class="btn btn-primary btn-lg" type="button">View all projects</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row flex-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-3">
        <ProjectCard :project="project" :baseUrl="baseUrl" v-for="project in this.projects" />
      </div>
    </div>
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

