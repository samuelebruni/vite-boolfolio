<script>
import axios from 'axios';
export default {
  name: 'ProjectCard',
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000/',
      projectApi: 'api/project',
      projects: null,

    }
  },
  methods: {
    getProject() {
      const url = this.baseUrl + this.projectApi;
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.projects = response.data.result

        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    this.getProject();
  }
}
</script>

<template>
  <section v-if="projects" class="d-flex my-5">
    <div class="col-3" v-for="project in projects.data">
      <div class="card shadow" style="width: 300px; height: 600px;">
        <img :src="baseUrl + 'storage/' + project.cover_image" class="card-img-top" style="height: 250px">
        <div class="card-body">
          <div class="d-flex justify-content-center mb-1">
            <p class="card-text text-center bg-primary badge">{{ project.type.name }}</p>
          </div>
          <h5 class="card-title text-center">{{ project.title }}</h5>
          <p class="card-text border-top my-3 py-3 border-bottom">{{ project.description }}</p>
          <ul class="list-unstyled">

            <div class="d-flex flex-wrap justify-content-center gap-1 mt-4">
              <li v-for=" technology in project.technologies" class="p-2 badge bg-success text-center">
                {{ technology.name }}
              </li>
            </div>
            <div class="border-top my-2 text-center">
              <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-danger mt-3">View
                Post</router-link>
            </div>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

