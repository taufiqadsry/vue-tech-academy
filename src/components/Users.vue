<template>
    <div class="row">
        <h2> {{ title }} </h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">avatar</th>
                    <th scope="col">email</th>
                    <th scope="col">fullname</th>
                    <th scope="col">action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dt, key) in users.data">
                    <th scope="row">{{ key }}</th>
                    <td><img :src="dt.avatar"/></td>
                    <td>{{dt.email}}</td>
                    <td>{{dt.first_name + " " +dt.last_name}}</td>
                    <td>
                        <a href="#">delete</a>
                        <a href="#">edit</a>
                        <a href="#">view</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
    tbody a { padding: 5px;}
</style>

<script>

    import axios from 'axios'
    import config from "./../config";

    export default {
        name: 'Users',
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                users: []
            }
        },
        created() {
            // axios get list here
            this.load()
        },
        methods: {
            load() {
                axios.get(config.users_url).then(res => {
                    this.users = res.data 
                }).catch ((err) => {
                    console.log(err);
                })
            },
            add() {

            },
            delete(id) {
                
            },
            edit(id) {

            }
        },
    }
</script>