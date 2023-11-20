<script>
import ComponentFooter from './components/ComponentFooter.vue';
import ComponentNav from './components/ComponentNav.vue';
export default {
  name: 'App',
  components: {
    ComponentFooter,
    ComponentNav
  }
}
</script>

<template>
  <header>
    <ComponentNav />
  </header>


  <main>
    <router-view></router-view>
  </main>


  <footer>
    <ComponentFooter />
  </footer>
</template>

