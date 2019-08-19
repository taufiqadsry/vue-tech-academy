<template>
    <ul class="pagination">
        <li class="page-item" :class="pagination.page == 1 ? 'disabled' : null">
            <a class="page-link" href="#" @click="fetchUsers(pagination.page - 1)">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>
        <li class="page-item" :class="pagination.page == (index+1) ? 'active' : null" v-for="(page, index) in pagination.total_pages" :key="page">
            <a class="page-link" href="#" @click="fetchUsers(index + 1)" v-text="index+1"></a>
        </li>
        <li class="page-item" :class="pagination.page == pagination.total_pages ? 'disabled' : null">
            <a class="page-link" href="#" @click="fetchUsers(pagination.page + 1)">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'pagination',
    props: {
        pagination: {
            type: Object 
        }
    },

    methods: {
        fetchUsers(page) {
            this.$emit('paginate', {page})
        }
    }
}
</script>