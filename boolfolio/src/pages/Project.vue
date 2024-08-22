<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';

export default {

    components: {

        ProjectCard
    },
    data() {
        return {
            store
        };
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