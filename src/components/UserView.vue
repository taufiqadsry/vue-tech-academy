<template>
    <div class="user-view">
        <div class="row">
            <div class="col-md-3">
                <img :src="user.avatar" alt="failed">
            </div>
            <div class="col-md-9">
                <h5 v-text="user.first_name + ' ' + user.last_name"></h5>
                <p>{{ user.email }} -  {{ user.job ? user.job : 'Nganggur' }}</p>
            </div>
        </div>    
    </div>
</template>

<style>
    .user-view img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        object-position: center;
    }
</style>

<script>
export default {
    name: 'user-view',
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>