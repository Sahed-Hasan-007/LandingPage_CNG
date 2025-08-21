import {createI18n} from 'vue-i18n'
import en from '~/locales/en.json'
import bn from '~/locales/bn.json'

export default defineNuxtPlugin(({vueApp}) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        messages: {
            en,
            bn
        }
    })
    vueApp.use(i18n)
})