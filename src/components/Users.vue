<template>
    <div class="row">
        <div>
            <h2> {{ title }} </h2>
            <b-form inline @submit="add" @keypress.enter="add" class="form">
                <b-form-input type="text" v-model="name" placeholder="name"/>
                <b-form-input type="text" v-model="job" placeholder="job"/>
                <b-button variant="primary" @click="add">Add</b-button>
            </b-form>
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
                    <b-button variant="danger" @click="hapus(key)">Delete</b-button>
                    <b-button variant="info" v-b-modal.xxx @click="editModal=true">Edit</b-button>
                    <b-button variant="success" v-b-modal.modal-1 @click="view(key)">View</b-button>
                </td>
            </tr>
            </tbody>
        </table>
        <ViewList v-if="viewModal" :user="viewUser"></ViewList>
        <EditForm v-if="editModal"></EditForm>
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

    import axios from 'axios';
    import config from "./../config";
    import EditForm from "./EditForm";
    import ViewList from "./ViewList";

    export default {
        name: 'Users',
        components: {
            EditForm,
            ViewList
        },
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
                job: '',
                editModal: false,
                viewModal: false,
                viewUser: {}
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
                    .delete(config.users_url + '/' + this.users.data[index].id)
                    .then(res => {
                        this.users.data.splice(index, 1)
                        console.log(this.users.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            edit(index) {
                axios
                    .put(config.users_url + '/' + this.users.data[index].id)
                    .then(res => {

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            view(index) {
                axios
                    .get(config.users_url + '/' + this.users.data[index].id)
                    .then(res => {
                        this.viewModal = true
                        this.viewUser = this.users.data[index]
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
    }
</script>