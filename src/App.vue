<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
    >
      Hello, Tailwind CSS!
    </button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import './assets/index.css';
</style>
