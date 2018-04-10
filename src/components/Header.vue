<template>
  <header>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-item uk-logo" :href="locationOrigin">{{ name }}</a>          

          <ul class="uk-navbar-nav">
            <li :class="{ 'uk-active': $route.name == 'home' }"><router-link to="/">О нас</router-link></li>
            <li :class="{ 'uk-active': $route.name == 'services' }"><router-link to="/services">Услуги</router-link></li>
            <li :class="{ 'uk-active': $route.name == 'portfolio' }"><router-link to="/portfolio">Портфолио</router-link></li>
            <li :class="{ 'uk-active': $route.name == 'clients' }"><router-link to="/clients">Клиенты</router-link></li>
            <li :class="{ 'uk-active': $route.name == 'support' }"><router-link to="/support">Поддержка</router-link></li>
            <li :class="{ 'uk-active': $route.name == 'contacts' }"><router-link to="/contacts">Контакты</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([ 'name' ]),

      locationOrigin () {
        return window.location.origin + (window.location.pathname == '/' ? '' : window.location.pathname)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "node_modules/uikit/src/scss/variables-theme.scss";

  .uk-logo {
    transition: all .4s;   

    &:hover {
      color: $global-danger-background;
    }
  }

  .uk-navbar-nav {
    li {
      a {
        transition: color .4s;
      }
    }

    .uk-active {
      a {
        color: $global-inverse-color;
        background-color: $global-primary-background;
      }
    }
  }
</style>
