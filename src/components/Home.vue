<template>
  <app-shell>
    <div>
      HOME PAGE
    </div>
  </app-shell>
</template>

<script>
import AppShell from '@/components/AppShell'

export default {
  name: 'home',
  components: { AppShell }
}
</script>

<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
