<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: {},
        };
    },

    methods: { 
        getProject() {
            const id = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
                .then((response) => {
                    this.project = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },

    created() {
        this.getProject();
    }
};
</script>

<template>
    <div>
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>
