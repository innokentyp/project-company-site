<template>
  <footer class="uk-section uk-section-secondary">
    <div class="uk-container">
      <address class="uk-flex uk-flex-between uk-flex-middle uk-text-small">
        <div>{{ copyrightYear }} &copy; Project Company / <a class="uk-link-reset" :href="`mailto:${projectCompanyEmail}`">Innokenty Polyakov</a></div>
        <div><span uk-icon="receiver"></span><a class="uk-link-reset" :href="`skype:${projectCompanyPhoneNumber}?call`">{{ projectCompanyPhone }}</a></div> 
      </address>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        projectCompanyPhoneNumber: '+79067038001',
        projectCompanyEmail: 'innokentypolyakov@gmail.com'
      }
    },
    computed: {
      projectCompanyPhone () {
        return `${this.projectCompanyPhoneNumber.slice(0, 2)} (${this.projectCompanyPhoneNumber.slice(2, 5)}) ${this.projectCompanyPhoneNumber.slice(5, 8)}-${this.projectCompanyPhoneNumber.slice(8, 10)}-${this.projectCompanyPhoneNumber.slice(10)}`        
      },
      copyrightYear () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "node_modules/uikit/src/scss/variables-theme.scss";

  .uk-section {
    padding-top: 35px;
    padding-bottom: 35px;
  }

  .uk-link-reset {
    &:hover {
      color: $global-link-color !important;
    }
  }
</style>