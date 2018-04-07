<template>
  <section class="uk-section uk-section-default uk-padding-remove-bottom">
    <div class="uk-container">
      <h2>Контакты</h2>

      <div class="uk-grid-match uk-grid-collapse uk-child-width-1-2@m" uk-grid>
        <div class="uk-width-1-3@m">
          <div class="uk-card uk-card-small uk-card-body uk-flex uk-flex-column uk-flex-center">
            <h3 class="uk-card-title uk-margin-remove-bottom">Адрес</h3>
            <p class="uk-margin-remove-top uk-margin-remove-bottom">
              <span class="uk-text-danger" uk-icon="location"></span>&nbsp;
              <a class="uk-link-heading" :href="`https://maps.google.com/?q=${address}`" target="_blank">{{ address }}</a>
            </p>
            <p class="uk-text-meta uk-margin-remove-top">Перед приездом к нам, заранее сообщите о своем визите.</p>
          </div>
          <div class="uk-card uk-card-small uk-card-body uk-flex uk-flex-between uk-flex-middle uk-background-muted">
            <div>
              <h3 class="uk-card-title uk-margin-remove-bottom">Телефон</h3>
              <p class="uk-margin-remove-top">
                <span class="uk-text-danger" uk-icon="receiver"></span>&nbsp;
                <a class="uk-link-heading" :href="`tel:${phoneNumber}`">{{ formatPhoneNumber(phoneNumber) }}</a>
              </p>
            </div>

            <a class="uk-button uk-button-danger" href="#js-modal-backcall" uk-toggle>Звонок</a>
          </div>
          <div class="uk-card uk-card-small uk-card-body uk-flex uk-flex-column uk-flex-center">
            <h3 class="uk-card-title uk-margin-remove-bottom">E-mail</h3>
            <p class="uk-margin-remove-top">
              <span class="uk-text-danger" uk-icon="mail"></span>&nbsp;
              <a class="uk-link-heading" :href="`mailto:${email}`">{{ email }}</a>
            </p>
          </div>
          <div class="uk-card uk-card-small uk-card-body uk-flex uk-flex-column uk-flex-center uk-background-muted">
            <h3 class="uk-card-title uk-margin-remove-bottom">Skype</h3>
            <p class="uk-margin-remove-top">
              <img src="../assets/skype.svg" width="20" height="20" uk-svg>&nbsp;
              <a class="uk-link-heading" :href="`skype:${skype}?call`">{{ skype }}</a>
            </p>
          </div>             
        </div>

        <div class="uk-width-expand@m" id="js-map-place-outer">
          <div id="js-map-place">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1125.6420400177833!2d37.53025109805131!3d55.64926779295093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d39634542af%3A0x873290b769eeac29!2z0J_RgNC-0YTRgdC-0Y7Qt9C90LDRjyDRg9C7LiwgOTAsINCc0L7RgdC60LLQsCwgMTE3NDg1!5e0!3m2!1sru!2sru!4v1522665444172" width="100%" height="568" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

	export default {
    computed: {
      ...mapState([ 'address', 'phoneNumber', 'email', 'skype' ])
    },
    methods: {
      formatPhoneNumber (phoneNumber) {
        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10)}`        
      }
    },
    mounted () {
      this.$nextTick(
        () => {
          setTimeout(() => { window.dispatchEvent(new CustomEvent('contactsMounted', {})) }, 10) 
        }
      )
    }
	}
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 960px) {
    #js-map-place-outer {
      position: relative;

      min-height: 568px;
    
      #js-map-place {
        position: absolute;

        left: 0;
        width: 100%;

        top: 0;
        bottom: 0;
      }  
    }  
  }
</style>