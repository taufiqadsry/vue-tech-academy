<template>
    <form :class="name" class="form-inline" @submit.prevent="submit">
        <input class="form-control" placeholder="name" :disabled="loading" type="text" v-model="name">
        <input class="form-control" placeholder="job" :disabled="loading" type="text" v-model="job">
        <input v-if="!loading" class="btn btn-primary" :disabled="loading" type="submit" value="Add">
        <button v-else class="btn btn-light" :disabled="loading">
            <app-spinner :loading="loading"></app-spinner>
        </button>
    </form>
</template>

<script>
import AppSpinner from './Spinner'
export default {
    name: 'user-form',
    props: {
        loading: {
            type: Boolean
        }
    },

    components: {
        AppSpinner
    },
    
    data() {
        return {
            name: '',
            job: '',
        }
    },

    methods: {
        submit() {
            this.$emit('add-new-user', { name: this.name, job: this.job })
        }
    }
}
</script>