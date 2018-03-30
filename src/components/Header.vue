<template>
  <header>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-item uk-logo" :href="locationOrigin"><span uk-icon="refresh"></span></a>          

          <ul class="uk-navbar-nav">
            <li :class="{ 'uk-active': $route.name == 'home' }"><router-link to="/">О нас</router-link></li>
            <li :class="{ 'uk-active': $route.name == 'products' }"><router-link to="/products">Продукты</router-link></li>
            <li :class="{ 'uk-active': $route.name == 'solutions' }"><router-link to="/solutions">Решения</router-link></li>
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
  export default {
    computed: {
      locationOrigin () {
        return window.location.origin + (window.location.pathname == '/' ? '' : window.location.pathname)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .uk-logo {
    span[uk-icon] {
      transition: all .6s;   

      color: green;

      &:hover {
        color: orange;
      }
    }
  }
</style>
