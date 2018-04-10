<template>
  <footer class="uk-section uk-section-secondary uk-padding-small">
    <address class="uk-grid-large uk-text-small" uk-grid><!-- uk-flex uk-flex-between uk-flex-middle uk-flex-wrap --> 
      <div class="uk-width-expand@m">{{ copyrightYear }} &copy; {{ name }}</div>
      <div class="uk-child-width-auto uk-grid-small uk-grid-divider uk-text-right@m" uk-grid>
        <a class="uk-link-reset" :href="`https://maps.google.com/?q=${address}`" target="_blank">{{ address }}</a>
        <a class="uk-link-reset" :href="`tel:${phoneNumber}`">{{ formatPhoneNumber(phoneNumber) }}</a>
        <a class="uk-link-reset" :href="`mailto:${email}`">{{ email }}</a>
      </div> 
    </address>
  </footer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([ 'name', 'copyrightYear', 'address', 'phoneNumber', 'email' ])
    },
    methods: {
      formatPhoneNumber (phoneNumber) {
        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10)}`        
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "node_modules/uikit/src/scss/variables-theme.scss";

  .uk-link-reset {
    transition: all .4s;

    &:hover {
      color: $global-link-color !important;
    }
  }
</style>