<template>
  <div class="componenet-header">
    <h1> Header Component </h1>
    <router-link :to="{name: 'kitchen'}">Kitchen</router-link> |
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link> |
    <router-link :to="{name: 'terms'}">Terms</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Header'
})
</script>
