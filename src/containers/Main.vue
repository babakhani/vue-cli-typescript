<template>
  <div class="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
export default {
  name: 'DefaultContainer',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
