<template>
  <footer class="uk-section uk-section-secondary uk-padding-small">
    <div class="uk-container">
      <address class="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap uk-text-small">
        <div>{{ copyrightYear }} &copy; Project Company</div>
        <div><span uk-icon="receiver"></span><a class="uk-link-reset" :href="`tel:${phoneNumber}`">{{ formatPhoneNumber(phoneNumber) }}</a></div> 
      </address>
    </div>
  </footer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([ 'copyrightYear', 'phoneNumber', 'email' ])
    },
    methods: {
      formatPhoneNumber (phoneNumber) {
        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10)}`        
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "node_modules/uikit/src/scss/variables.scss";

  .uk-link-reset {
    &:hover {
      color: $global-link-color !important;
    }
  }
</style>