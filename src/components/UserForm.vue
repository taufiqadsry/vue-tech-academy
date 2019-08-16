<template>
    <form :class="name" class="form-inline" @submit.prevent="submit" @keypress.enter="submit">
        <input class="form-control" placeholder="name" :disabled="loading" type="text" v-model="name">
        <input class="form-control" placeholder="job" :disabled="loading" type="text" v-model="job">
        <input class="btn btn-primary" :disabled="loading" type="submit" value="Add">
    </form>
</template>

<script>
export default {
    name: 'user-form',
    props: {
        loading: {
            type: Boolean
        }
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