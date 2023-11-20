<script>
import axios from 'axios';
export default {
    name: 'SingleProjectView',
    data() {
        return {
            projects: [],
        }
    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/project/${this.$route.params.slug}`;
        axios.get(url)
            .then(resp => {
                console.log(resp.data.result);
                this.projects = resp.data.result;
                //console.log(this.projects.type.name);
            })
            .catch(err => {
                console.log(err.message);
            })

    }
}
</script>
<template>
    <div class="bg-light">

        <div class="container py-5">
            <div class="d-flex gap-3 align-items-center">
                <div class="cover_image shadow">
                    <img class="img-fluid object-fit-cover" :src="'http://127.0.0.1:8000/storage/' + projects.cover_image"
                        alt="" style="height: 400px;">
                </div>
                <div>
                    <h1>{{ this.projects.title }}</h1>
                    <p>{{ this.projects.description }}</p>
                </div>
            </div>
        </div>

    </div>
</template>