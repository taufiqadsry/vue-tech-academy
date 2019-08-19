<template>
    <div>
        <b-modal id="modal-1" title="View User">
            <p>{{user.email}}</p>
            <p>{{user.first_name}}</p>
            <p>{{user.last_name}}</p>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "ViewList",
        props: {
            user: {
                type: Object,
            }
        }
    }
</script>

<style scoped>

</style>