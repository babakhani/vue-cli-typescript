<template>
  <div class="hello">
    <pre>
      {{ isAuthenticated }}
    </pre>
    <ul>
      <li><a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        target="_blank"
        rel="noopener"
      >babel</a></li>
      <li><a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
        target="_blank"
        rel="noopener"
      >typescript</a></li>
      <li><a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
        target="_blank"
        rel="noopener"
      >pwa</a></li>
      <li><a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
        target="_blank"
        rel="noopener"
      >eslint</a></li>
      <li><a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
        target="_blank"
        rel="noopener"
      >unit-mocha</a></li>
      <li><a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch"
        target="_blank"
        rel="noopener"
      >e2e-nightwatch</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a
        href="https://vuejs.org"
        target="_blank"
        rel="noopener"
      >Core Docs</a></li>
      <li><a
        href="https://forum.vuejs.org"
        target="_blank"
        rel="noopener"
      >Forum</a></li>
      <li><a
        href="https://chat.vuejs.org"
        target="_blank"
        rel="noopener"
      >Community Chat</a></li>
      <li><a
        href="https://twitter.com/vuejs"
        target="_blank"
        rel="noopener"
      >Twitter</a></li>
      <li><a
        href="https://news.vuejs.org"
        target="_blank"
        rel="noopener"
      >News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a
        href="https://router.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-router</a></li>
      <li><a
        href="https://vuex.vuejs.org"
        target="_blank"
        rel="noopener"
      >vuex</a></li>
      <li><a
        href="https://github.com/vuejs/vue-devtools#vue-devtools"
        target="_blank"
        rel="noopener"
      >vue-devtools</a></li>
      <li><a
        href="https://vue-loader.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-loader</a></li>
      <li><a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
      >awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
      signOut: 'auth/signOut'
    })
  }
})
</script>
