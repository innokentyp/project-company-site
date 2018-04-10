<template>
  <div id="app">
    <app-header/>

    <router-view/>

    <app-feedback/>
    <app-footer/>

    <app-backcall/>

    <a class="uk-button uk-button-primary uk-button-small" id="js-scroll-up" href="#top" uk-scroll :hidden="scrollUpHidden"><span uk-icon="icon: chevron-up; ratio: 1"></span></a>
  </div>
</template>

<script>
  import UIkit from 'uikit'

  import Header from '@/components/Header.vue'
  import Feedback from '@/components/Feedback.vue'
  import Footer from '@/components/Footer.vue'
  import Backcall from '@/components/Backcall.vue'

  export default {
    components: {
      'app-header': Header,
      'app-feedback': Feedback,
      'app-footer': Footer,
      'app-backcall': Backcall
    },
    data () {
      return {
        scrollUpHidden: true 
      }
    },
    created () {
      // Scroll Up Button
      window.addEventListener('scroll', 
        (e) => {
          this.scrollUpHidden = window.pageYOffset < 200
        }
      );

      // Contacts
      ['resize', 'contactsMounted'].map(
        (event) => {
          window.addEventListener(
            event, 
            (e) => {
              var element = document.getElementById('js-map-place')

              if (element) {
                element.style.width = window.innerWidth >= 960 ? (document.documentElement.clientWidth - element.getBoundingClientRect().left) + 'px' : ''

              }
            }
          )          
        }
      )
    },
    mounted () {
      // Scroll Up Button
      UIkit.scroll(document.getElementById('js-scroll-up'), { duration: 600 })
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
  
  #js-scroll-up {
    position: fixed;

    left: calc(100vw / 2 - 26px);
    bottom: 36px;

    z-index: 1000;
    opacity: .75;

    box-shadow: 0 0 6px rgba(0,0,0,0.5);
  }

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
