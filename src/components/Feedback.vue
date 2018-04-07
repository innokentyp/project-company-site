<template>
  <section class="uk-section uk-section-primary">
    <div class="uk-container uk-container-small">
      <h2>Остались вопросы?</h2>
      <p class="uk-text-meta">Поделитесь своим мнением о нашей работе или задайте интересующий вас вопрос</p>

      <form class="uk-form-horizontal" id="form-feedback" @submit.prevent="formFeedbackSubmit" @reset="formFeedbackReset" autocomplete="off" novalidate>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-feedback-name">Имя</label>
          <div class="uk-form-controls">
            <input :class="['uk-input', { 'error': error.includes('name') }]" id="form-feedback-name" name="name" type="text">
          </div>
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-feedback-phone">Номер телефона</label>
          <div class="uk-form-controls">
            <input :class="['uk-input', { 'error': error.includes('phone') }]" id="form-feedback-phone" name="phone" type="tel">
          </div>
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-feedback-message">Ваш вопрос</label>
          <div class="uk-form-controls">
            <textarea :class="['uk-textarea', { 'error': error.includes('message') }]" id="form-feedback-message" name="message" rows="5"></textarea>
          </div>
        </div>
        
        <div class="uk-margin">
          <div class="uk-form-controls">
            <label><input class="uk-checkbox" name="agree" v-model="agree" type="checkbox" tabindex="-1" checked>&nbsp;Я <span class="uk-text-success" v-if="agree">согласен(на)</span><span class="uk-text-danger" v-else>не согласен(на)</span> с политикой <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C" target="_blank" tabindex="-1">конфиденциальности</a> сайта</label>
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-form-controls">
            <button class="uk-button uk-button-danger" type="submit" :disabled="agree == false">Отправить</button>
            <button class="uk-button uk-button-default" type="reset">Сбросить</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import UIkit from 'uikit'

  export default {
    data () {
      return {
        phoneRegex: /(\+7|8)?\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}/,

        // Согласие на обработку персональных данных
        agree: true,

        error: []
      }
    },
    methods: {
      formFeedbackSubmit (e) {
        this.error = []

        if (!e.target.message.value) {
          this.error.push('message')

          this.$nextTick(() => e.target.message.focus())
        }

        if (!this.phoneRegex.test(e.target.phone.value)) {
          this.error.push('phone')

          this.$nextTick(
            () => { 
              e.target.phone.focus()
              
              if (e.target.phone.value) {
                e.target.phone.select()
              }
            }
          )
        }

        if (!e.target.name.value) {
          this.error.push('name')

          this.$nextTick(() => e.target.name.focus())
        }

        if (this.error.length > 0) return

        // Отправить данные на сервер
        console.dir(
          JSON.stringify(
            { 
              [e.target.name.name]: e.target.name.value, 
              [e.target.phone.name]: e.target.phone.value.replace(/[\s\-\(\)]/g, ''), 
              [e.target.message.name]: e.target.message.value,
              [e.target.agree.name]: e.target.agree.checked 
            }
          )
        )

        UIkit.modal.alert('Отлично! Ваш вопрос принят и будет рассмотрен в ближайшее время...')
        
        e.target.reset()
      },
      formFeedbackReset (e) {
        this.error = []

        if (e) {
          this.$nextTick(() => e.target.name.focus())
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "node_modules/uikit/src/scss/variables.scss";

  #form-feedback-message {
    resize: none;
  }

  .error {
    background-color: lighten($alert-danger-color, 10%) !important;
  } 
</style>