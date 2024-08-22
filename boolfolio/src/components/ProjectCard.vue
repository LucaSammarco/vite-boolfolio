<script>
import { store } from '../store.js';
import axios from 'axios';


export default {
    data() {
        return {
            store
        };
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    // handle success
                    console.log(response.data.results.data);
                    this.store.projects = response.data.results.data;
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                });
        }
    },
    created() {
        this.getProjects();
    }
};
</script>

<template>
    <div>
<!--         
    <ul>
        <li v-for="project in store.projects" :key="project.id">

            {{ project.name }}

        </li>

    </ul> -->

    
    </div>



    <div>
        <h1>Projects</h1>
        <div class="row">
            <div class="col-md-4" v-for="project in store.projects" :key="project.id">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <router-link :to="{ name: 'single-project', params: { id: project.id } }" class="btn btn-primary">
                            Read More
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>

</style>