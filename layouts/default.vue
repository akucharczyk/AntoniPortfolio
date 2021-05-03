<template>
  <div class="portfolio" :class="navigationState">
    <navigation/>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Navigation from './Navigation.vue'

export default {
  components: {
    Navigation
  },
  computed: {
    navigationState () {
      return this.$store.state.navigationIsOpen ? 'overflow-hidden' : ''
    }
  }
}
</script>

<style lang="scss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.portfolio {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  width: 100vw;
  max-width: 100vw;
  white-space: nowrap;
}

.content {
  display: inline-block;
  width: 100vw;
}
</style>
