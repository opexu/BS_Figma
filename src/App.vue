<template>
<div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <RectangleCreatorDemo />
</div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import RectangleCreatorDemo from './components/RectangleCreatorDemo.vue'
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>