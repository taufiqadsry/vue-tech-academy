<template>
    <div class="row">
        <h2> {{ title }} </h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">Email</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dt in users.data" :key="dt.index">
                    <th scope="row">{{ dt.id }}</th>
                    <td><img :src="dt.avatar"/></td>
                    <td>{{dt.email}}</td>
                    <td>{{dt.first_name + " " +dt.last_name}}</td>
                    <td>
                        <edit-dialog action="View" v-on:showEditDialog="showEditDialog(dt)" v-on:closeEditDialog="closeEditDialog"></edit-dialog>
                        <edit-dialog action="Edit" v-on:showEditDialog="showEditDialog(dt)" v-on:closeEditDialog="closeEditDialog"></edit-dialog>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li 
                    v-for="page in users.total_pages" 
                    :key="`${page}`" 
                    :class="currentPage == page ? 'page-item active' : 'page-item'"
                >
                    <button class="page-link" @click="fetchUsers(page)">{{ page }}</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
    tbody a { padding: 5px }
</style>

<script>
    import { mapState, mapMutations } from 'vuex';
    import editDialog from './Dialog'

    export default {
        name: 'Users',

        components: {
            editDialog
        },

        props: {
            title: {
                type: String,
                default: ""
            }
        },

        data() {
            return {
                currentPage: null
            }
        },
        
        computed: {
            ...mapState({
                users: 'data'
            })
        },
        
        methods: {
            ...mapMutations({
                setActiveUser: 'setActive'
            }),

            fetchUsers(page) {
                this.$store.dispatch('fetchAll', page)
                this.currentPage = page
            },

            showEditDialog(user) {
                this.setActiveUser(user)
            },

            closeEditDialog() {
                this.setActiveUser({})
            }
        },

        mounted() {
            this.fetchUsers(1)
        },
    }
</script>