<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
        

        };
    },
    methods: {
        getProjects : function() {
            axios.get('http://127.0.0.1:8000/api/projects')

           .then((response) => {
            // handle success
            console.log(response.data.results.data);
            this.projects = response.data.results.data;
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
        <h1>Main</h1>
    </div>

    <ul>
        <li v-for="project in projects">

            {{ project.name }}

        </li>

    </ul>
    
</template>

<style lang="scss" scoped>

</style>