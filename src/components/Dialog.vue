<template>
  <div>
    <b-button v-b-modal.modal-center class="btn" variant="primary">
      Add New User
    </b-button>
    <b-modal id="modal-center" v-model="dialog" centered :title="action.concat(' User Data')" no-close-on-esc no-close-on-backdrop hide-header-close>
      <b-container class="text-left">
        <b-img :src="userActive.avatar" fluid v-show="userActive.id"></b-img>
        <b-form :class="userActive.id ? 'mt-4' : ''">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="userActive.email"
              type="email"
              :disabled="action == 'View'"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="First Name" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="userActive.first_name"
              required
              :disabled="action == 'View'"
              placeholder="Enter first name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Last Name" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="userActive.last_name"
              :disabled="action == 'View'"
              required
              placeholder="Enter last name"
            ></b-form-input>
          </b-form-group>

          <!-- <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
      </b-container>
      <div slot="modal-footer" class="w-100">
        <div class="float-right">
          <b-button
            variant="secondary"
            class="mr-1"
            @click="close"
          >
            Close
          </b-button>
          <b-button
            variant="success"
            v-show="action != 'View'"
            @click="save"
          >
            Save
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'

export default {
  props: {
    action: String
  },

  data() {
    return {
      dialog: false
    }
  },

  computed: {
    ...mapState({
      userActive: 'active'
    })
  },

  methods: {
    close() {
      this.dialog = false
      this.$emit('closeEditDialog')
    },

    save() {
      console.log('save')
    }
  },

  watch: {
    userActive() {
      if (this.userActive.id) {
        this.dialog = true
      }
    }
  }
}
</script>

<style>

</style>