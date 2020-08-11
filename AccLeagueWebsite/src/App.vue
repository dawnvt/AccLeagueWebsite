<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
  'Navigation': Navigation
  },
  mounted() {
    let bodyElement = document.body;
    bodyElement.classList.add("app-background");
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #0a0a0a;
}

.tabs a {
  color: white;
}

.table thead th {
  color: white;
}

.label {
  color: white;
}
</style>