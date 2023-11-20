  
<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
    name: 'ProjectView',
    components: {
        ProjectCard
    }

}
</script>
<template>
    <div class="p-5 bg-dark text-light">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Our Blog</h1>
            <p class="col-md-8 fs-4">Find top news from top authors</p>
            <button class="btn btn-primary btn-lg" type="button">Find out more</button>
        </div>
    </div>

    <div class="container">
        <div class="row flex-row row-cols-1">
            <ProjectCard />
        </div>
    </div>
</template>

  
<style lang="scss" scoped></style>