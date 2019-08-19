<template>
    <div class="row">
        <div>
            <h2> {{ title }} </h2>
            <form @submit="add" @keypress.enter="add" class="form">
                <input type="text" v-model="name" placeholder="name">
                <input type="text" v-model="job" placeholder="job">
                <button>Add</button>
            </form>
        </div>

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
                <th scope="row">
                    {{ key }}

                </th>
                <td><img :src="dt.avatar" class="ava"/></td>
                <td>{{dt.email}}</td>
                <td>{{dt.first_name + " " +dt.last_name}}</td>
                <td>
                    <a href="#" @click="hapus(key)" >delete</a>
                    <a href="#">edit</a>
                    <a href="#">view</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
    .row {
        margin-top: -35px;
    }

    tbody a {
        padding: 5px;
    }

    h2 {
        text-align: left;
    }

    .form {
        float: right;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 30px;
    }

    .ava {
        height: 128px;
        width: 128px;
    }
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
                users: [],
                name: '',
                job: ''
            }
        },
        created() {
            // axios get list here
            this.load();
        },
        methods: {
            load() {
                axios
                    .get(config.users_url)
                    .then(response => {
                        this.users = response.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            add(e) {
                e.preventDefault();
                axios
                    .post(config.users_url)
                    .then(res => {
                        res.data.avatar = require('@/assets/ward.jpeg');
                        res.data.email = '*Need Verification';
                        this.users.data.push(res.data);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            hapus(index) {
                axios
                    .delete(config.users_url+ '/' + this.users.data[index].id)
                    .then(res => {
                        this.users.data.splice(index, 1)
                        console.log(this.users.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            edit(id) {

            },
            view(id) {

            }
        },
    }
</script>