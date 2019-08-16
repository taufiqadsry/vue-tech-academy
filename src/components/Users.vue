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
                <tr v-for="dt in users" :key="dt.index">
                    <th scope="row">{{ dt.id }}</th>
                    <td><img :src="dt.avatar"/></td>
                    <td>{{dt.email}}</td>
                    <td>{{dt.first_name + " " +dt.last_name}}</td>
                    <td>
                        <edit-dialog action="View"></edit-dialog>
                        <edit-dialog action="Edit"></edit-dialog>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <!-- <li class="page-item"><a class="page-link" href="#">Previous</a></li> -->
                <li class="page-item active"><a class="page-link" href="#" @click="fetchUsers()">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <!-- <li class="page-item"><a class="page-link" href="#">Next</a></li> -->
            </ul>
        </nav>
    </div>
</template>

<style>
    tbody a { padding: 5px;}
</style>

<script>
    import { mapState } from 'vuex';
    // import axios from 'axios'
    // import config from "./../config"
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
        // data() {
        //     return {
        //         users: []
        //     }
        // },
        
        computed: {
            // users() {
            //     return this.$store.getters.getData
            // },
            ...mapState({
                users: 'data'
            })
        },
        
        methods: {
            fetchUsers() {
                this.$store.dispatch('fetchAll')
            },
            // load() {
            //     axios.get(config.users_url).then(res => {
            //         this.users = res.data 
            //     }).catch ((err) => {
            //         console.log(err);
            //     })
            // },
            // add() {              
            // },
            // delete(id) {
                
            // },
            // edit(id) {
                
            // },
            // view(id) {

            // }
        },

        mounted() {
            this.fetchUsers()
            console.log(this.users)
        },
    }
</script>