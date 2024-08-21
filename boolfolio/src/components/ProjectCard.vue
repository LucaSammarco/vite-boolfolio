<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        };
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
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>

</style>