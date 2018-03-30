<template>
  <div id="app">
    <app-header/>

    <section class="uk-section">
      <div class="uk-container">
        <router-view/>
      </div>
    </section>

    <app-footer/>    
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style lang="scss">
  // UIkit {

  // 1. Your custom variables and variable overwrites.
  // $global-link-color: orange;

  // 2. Import default variables and available mixins.
  @import "node_modules/uikit/src/scss/variables-theme.scss";
  @import "node_modules/uikit/src/scss/mixins-theme.scss";

  // 3. Your custom mixin overwrites.
  // @mixin hook-card() { color: lime; }

  // 4. Import UIkit.
  @import "node_modules/uikit/src/scss/uikit-theme.scss";

  // }

  /*
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  */
</style>
