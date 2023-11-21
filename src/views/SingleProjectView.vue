<script>
import axios from 'axios';
export default {
    name: 'SingleProjectView',
    data() {
        return {
            projects: {},
            loading: true
        }
    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/project/${this.$route.params.slug}`;
        axios.get(url)
            .then(resp => {
                console.log(resp.data.result);
                if (resp.data.success) {
                    this.projects = resp.data.result;
                    this.loading = false
                } else {
                    this.$router.push({ name: 'NotFound' });
                }

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
            <div v-if="!loading">
                <div class="text-center">
                    <div>
                        <img class="img-fluid" :src="'http://127.0.0.1:8000/storage/' + projects.cover_image" alt=""
                            style="height: 400px;">
                    </div>
                    <div>
                        <h1>{{ this.projects.title }}</h1>
                        <p>{{ this.projects.description }}</p>

                        <div>
                            <div class="d-flex gap-1 justify-content-center" v-if="projects.type">
                                <h6>Type 🚀:</h6>
                                <span class="badge bg-dark">{{ projects.type.name }}</span>

                            </div>
                            <div class="mt-3 d-flex gap-1 justify-content-center" v-if="projects.technologies.length > 0">
                                <h6>Technologies 🤖:</h6>
                                <ul class="list-unstyled d-flex gap-1 justify-content-center">

                                    <li class="badge bg-dark px-2" v-for="technology in projects.technologies">
                                        - {{ technology.name }}
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>