<template>
    <div class="row">
        <div class="w-100 d-flex justify-content-between">
            <h2> {{ title }} </h2>
            <user-form :loading="submitting" @add-new-user="addUser($event)"></user-form>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">avatar</th>
                    <th scope="col">email</th>
                    <th scope="col">job</th>
                    <th scope="col">fullname</th>
                    <th scope="col">action</th>
                </tr>
            </thead>
            <tbody>
                <app-spinner :loading="fetching"></app-spinner>
                <tr v-for="(dt, key) in users.slice(0, pagination.per_page)" :key="key">
                    <th scope="row">{{ userIndex(key) }}</th>
                    <td><img :src="dt.avatar"/></td>
                    <td>{{dt.email}}</td>
                    <td>{{dt.job ? dt.job : 'Nganggur'}}</td>
                    <td>{{dt.first_name + " " +dt.last_name}}</td>
                    <td>
                        <button class="btn btn-danger action" :disabled="submitting" @click="deleteUser(dt.id)">delete</button>
                        <button class="btn btn-warning action" :disabled="submitting" @click="openDialog({type: 'edit', user: dt})">edit</button>
                        <button class="btn btn-success action" :disabled="submitting" @click="openDialog({type: 'view', user: dt})">view</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <user-pagination :pagination="pagination" @paginate="fetchUsers($event)"></user-pagination>
        <dialog-modal @close="closeDialog" :open="active.show">
            <user-edit v-if="active.type == 'edit'" :loading="submitting" @update-user="editUser($event)" :user="active.user"></user-edit>
            <user-view v-else :user="active.user"></user-view>
        </dialog-modal>
    </div>
</template>

<style>
    tbody a { padding: 5px;}
    table img { width: 48px; height: 48px; object-fit: cover; object-position: center; }
    table .action {margin: 0 4px;}
    table + *, .spinner {margin: 0 auto;}
</style>

<script>

    import UserForm from './UserForm'
    import UserEdit from './UserEdit'
    import DialogModal from './Dialog'
    import UserView from './UserView'
    import UserPagination from './Pagination'
    import AppSpinner from './Spinner'
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Users',
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        computed: {
            ...mapState(['users', 'pagination', 'submitting', 'active', 'fetching']),
            userIndex() {
                return function(key) {
                    return (this.pagination.page-1)*this.pagination.per_page + key + 1
                }
            }
        },
        components: {
            UserForm,
            UserEdit,
            DialogModal,
            UserView,
            UserPagination,
            AppSpinner
        },
        created() {
            this.fetchUsers()
        },
        methods: {
            ...mapActions(['fetchUsers', 'addUser', 'deleteUser', 'showUser', 'editUser', 'openDialog', 'closeDialog']),
        },
    }
</script>