<script>
export default {
  name: 'ProjectCard',

  props: {
    project: Object,
    baseUrl: String
  },
}
</script>

<template>
  <div class="col-3">
    <div class="card shadow" style="width: 300px; height: 600px;">
      <img :src="baseUrl + 'storage/' + project.cover_image" class="card-img-top" style="height: 300px">
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

        </ul>
      </div>
    </div>
  </div>
</template>

