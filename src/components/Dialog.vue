<template>
    <div v-if="open" class="dialog">
        <div class="dialog-backdrop"></div>
        <div class="dialog-content text-left">
            <button class="close btn btn-danger" @click="$emit('close')">&times;</button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
    .dialog {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .dialog .close {
        float: right;
    }

    .dialog .dialog-backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
    }

    .dialog .dialog-content {
        z-index: 3;
        width: 50%;
        min-width: 300px;
        max-width: 600px;
        background: white;
        padding: 16px;
    }
</style>