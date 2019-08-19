<template>
    <div id="app">
        <UsersTable title="Users List"/>
    </div>
</template>

<script>
    import UsersTable from "./components/Users";

    export default {
        name: 'app',
        components: {
            UsersTable
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
