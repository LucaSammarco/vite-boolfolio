<script>
import axios from 'axios';
import { store } from '../store.js';
import ProjectCard from './ProjectCard.vue';

export default {

    components: {

        ProjectCard
    },

    data() {
        return {
            store
        

        };
    },
    methods: {
        getProjects : function() {
            axios.get('http://127.0.0.1:8000/api/projects')

           .then((response) => {
            // handle success
            console.log(response.data.results.data);
            this.store.projects = response.data.results.data;
            })

            .catch(function (error) {
              // handle error
            console.log(error);
                })
        }

    },
    created() {
        this.getProjects();
    }

};
</script>

<template>
    <div>
       
    </div>

    <ProjectCard />

    
</template>

<style lang="scss" scoped>

</style>