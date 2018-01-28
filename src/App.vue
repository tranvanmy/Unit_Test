<template>
  <div id="app">
    <button @click="toggleMe">Toggle me</button>
    <hr/>
    <img  v-if="isTrue" src="./assets/logo.png">
    <router-link to="/demo">Home</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isTrue: function() {
      return this.$store.getters.isTrue;
    }
  },
  data: function () {
    return {
    }
  },
  methods: {
    toggleMe: function () {
      console.log(this.$store.getters.isTrue);
      this.$store.dispatch('toggle1');
    }
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
