<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'App',
  data() {

    return {
      baseUrl: 'http://127.0.0.1:8000/',
      projectApi: 'api/project'
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

<template></template>

