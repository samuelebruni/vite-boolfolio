<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'HomeView',
    components: {
        ProjectCard
    },
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
            projectApi: 'api/project/latest',
            projects: [],

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
    <div>
        <div class="p-5 mb-4 bg-dark text-light">
            <div class="container py-5">
                <h1 class="display-5 fw-bold">Welcome in my Portfolio!</h1>
                <p class="col-md-8 fs-4">On this portal you can find all the projects developed by me. For each of them you
                    will have the opportunity to specifically view all the features and technologies used.</p>
                <button class="btn btn-primary btn-lg" type="button">See all projects 🚀</button>
            </div>
        </div>

        <section class="latest_projects" v-if="projects">
            <div class="container">
                <h2>Latest Projects 💫</h2>
                <div class="row row-cols-1 mb-5">
                    <ProjectCard />
                </div>
            </div>
        </section>



        <section class=" my-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img class="img-fluid" src='https://picsum.photos/1200/600' alt='' />
                    </div>
                    <div class="col">
                        <h3>Company Name</h3>
                        <p class="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed quas laborum saepe?
                            Cupiditate
                            quidem
                            molestias facere optio quos hic officiis totam, quis est dolores ab quo eligendi
                            repellat
                            repellendus!
                        </p>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium amet et adipisci,
                            error,
                            consequatur
                            nobis neque debitis sequi expedita at autem, magni cum numquam officiis vel laboriosam
                            saepe sed
                            repudiandae?
                        </p>
                        <a href="#" class="btn btn-block btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-globe" viewBox="0 0 16 16">
                                <path
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                            </svg>
                            Find us
                        </a>
                    </div>


                </div>
            </div>
        </section>


        <div class="newsletter py-5 mt-5 bg-light text-dark">
            <div class="container">
                <h4 class="mb-3">Subscribe</h4>
                <form action="">

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" id="email" class="form-control" placeholder="email@example.com"
                            aria-describedby="emailHelper">
                        <small id="emailHelper" class="text-muted">Type your addreess here</small>
                    </div>

                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped></style>