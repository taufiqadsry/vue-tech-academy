<template>
    <form @submit.prevent="edit" class="align-left">
        <h3>Edit</h3>
        <input :disabled="loading" type="text" class="mb-2 form-control" v-model="editedUser.first_name">
        <input :disabled="loading" type="text" class="mb-2 form-control" v-model="editedUser.last_name">
        <input :disabled="loading" type="text" class="mb-2 form-control" v-model="editedUser.email">
        <input :disabled="loading" type="text" class="mb-2 form-control" v-model="editedUser.job" placeholder="job">
        <input class="btn btn-primary" :disabled="loading" type="submit" value="edit">
    </form>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        loading: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    data() {
        return {
            editedUser: {},
        }
    },

    created() {
        this.editedUser = JSON.parse(JSON.stringify(this.user))
        this.editedUser.job = this.editedUser.job ? this.editedUser.job : ''
    },

    methods: {
        edit() {
            this.$emit('update-user', this.editedUser)
        }
    }
}
</script>