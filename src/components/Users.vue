<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-left">
        <h2> {{ title }} </h2>
      </div>
      <div class="col-md-6 text-right">
        <edit-dialog :action="action" v-on:closeEditDialog="closeEditDialog"></edit-dialog>
      </div>
    </div>
    <div class="row">  
      <b-table striped hover :items="users.data" :fields="fields">
        <template slot="[actions]" slot-scope="row">
          <b-button size="sm" @click="showDetailDialog(row.item)" class="mr-2 btn-info">
            View
          </b-button>
          <b-button size="sm" @click="showEditDialog(row.item)" class="mr-2 btn-success">
            Edit
          </b-button>
          <b-button size="sm" class="mr-2 btn-danger">
            Delete
          </b-button>
        </template>
      </b-table>
    </div>
    <div class="row justify-content-md-center">
      <b-nav class="pagination">
        <ul class="pagination">
          <li :class="currentPage == 1 ? 'page-item disabled' : 'disabled'"><button class="page-link" @click="fetchUsers(currentPage - 1)">&laquo;</button></li>
          <li 
            v-for="page in users.total_pages" 
            :key="`${page}`" 
            :class="currentPage == page ? 'page-item active' : 'page-item'"
          >
            <button class="page-link" @click="fetchUsers(page)">{{ page }}</button>
          </li>
          <li :class="currentPage == users.total_pages ? 'page-item disabled' : 'disabled'"><button class="page-link" @click="fetchUsers(currentPage + 1)">&raquo;</button></li>
        </ul>
      </b-nav>
    </div>
    <div class="row">
      <span class="text-danger">*Add, Edit, and Delete incomplete</span>
    </div>
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
              fields: [ 'id', 'email', 'first_name', 'last_name', 'actions' ],
              currentPage: null,
              action: ''
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

            showDetailDialog(user) {
                this.setActiveUser(user)
                this.action = 'View'
            },

            showEditDialog(user) {
                this.setActiveUser(user)
                this.action = 'Edit'
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