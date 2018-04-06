<template>
  <div id="js-modal-backcall" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      
      <div class="uk-modal-header">
        <h2 class="uk-modal-title">Обратный звонок</h2>
      </div>
      
      <div class="uk-modal-body">
        <form class="stacked" id="form-backcall" ref="form" @submit.prevent="formBackcallSubmit"  @reset="formBackcallReset" autocomplete="off" novalidate>
          <div class="uk-margin">
            <label class="uk-form-label" for="form-backcall-name">Имя</label>
            <div class="uk-form-controls">
              <input :class="['uk-input', { 'error': error.includes('name') }]" id="form-backcall-name" name="name" type="text">
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-backcall-phone">Номер телефона</label>
            <div class="uk-form-controls">
              <input :class="['uk-input', { 'error': error.includes('phone') }]" id="form-backcall-phone" name="phone" type="tel">
            </div>
          </div>
          
          <div class="uk-margin">
            <div class="uk-form-controls">
              <label><input class="uk-checkbox" name="agree" v-model="agree" type="checkbox" checked>&nbsp;Я <span class="uk-text-success" v-if="agree">согласен(на)</span><span class="uk-text-danger" v-else>не согласен(на)</span> с политикой <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C" target="_blank">конфиденциальности</a> сайта</label>
            </div>
          </div>
        </form>
      </div>

      <div class="uk-modal-footer uk-text-right">
        <button class="uk-button uk-button-danger" type="submit" form="form-backcall" :disabled="agree == false">Отправить</button>
        <button class="uk-button uk-button-default" type="reset" form="form-backcall">Сбросить</button>        
      </div>
    </div>
  </div>
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
      formBackcallSubmit (e) {
        this.error = []

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
              [e.target.agree.name]: e.target.agree.checked 
            }
          )
        )

        UIkit.modal(this.$el).hide(); 
      },
      formBackcallReset (e) {
        this.error = []

        if (e) {
          this.$nextTick(() => e.target.name.focus())
        }
      }
    },
    mounted () {
      UIkit.util.on('#js-modal-backcall', 'shown', 
        (e) => {
          this.error = []

          var form = this.$refs.form

          form.name.focus()

          if (form.name.value) {
            form.name.select()
          }
        }
      );
    } 
  }
</script>

<style lang="scss" scoped>
  @import "node_modules/uikit/src/scss/variables.scss";

  .error {
    outline: solid 1px $alert-danger-color;
  }
</style>