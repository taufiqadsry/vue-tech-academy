<template>
    <div v-if="loading" class="spinner spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</template>

<script>
export default {
    name: 'spinner',
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>