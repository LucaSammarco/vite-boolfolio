<script>

export default {
    data() {
        return {
            navLinks: [
            { label: 'Homepage', name: 'home' },
            { label: 'Blog', name: 'blog' },
            { label: 'Project', name: 'project' }
            ],
        };
        }
    };
    </script>

<template>
    <div>
        <h1>Header</h1>
        <nav>
            <ul class="d-flex">
                <li v-for="link in navLinks" :key="link.name" class="me-5">
                    <router-link :to="`/${link.name}`">{{ link.label }}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

</style>