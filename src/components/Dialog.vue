<template>
  <div>
    <!-- TOGGLER -->
    <button 
      type="button" 
      :class="action === 'Edit' ? 'btn btn-success' : 'btn btn-primary'" 
      data-toggle="modal" 
      data-target="#exampleModal"
      @click="showEditDialog"
    >
        {{ action }}
    </button>
    <!-- MODAL -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel" v-text="action == 'View' ? 'User Detail' : 'Edit User Data'"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body text-left bg-light">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputFirstName">First Name</label>
                        <input type="text" class="form-control" id="inputFirstName" v-model="userActive.first_name">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputLastName">Last Name</label>
                        <input type="text" class="form-control" id="inputLastName" v-model="userActive.last_name">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail4">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" v-model="userActive.email">
                    </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeEditDialog">Close</button>
                  <button type="button" class="btn btn-primary" v-show="action == 'Edit'">Save</button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    action: String
  },

  computed: {
    ...mapState({
      userActive: 'active'
    })
  },

  methods: {
    showEditDialog() {
      this.$emit('showEditDialog')
    },

    closeEditDialog() {
      this.$emit('closeEditDialog')
    }
  }
}
</script>

<style>

</style>