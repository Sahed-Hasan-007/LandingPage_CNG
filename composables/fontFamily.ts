import {useI18n} from "vue-i18n";

export const localeClass = computed(() => {
    const {locale} = useI18n()
    return locale.value === 'en' ? 'SF UI Display, sans-serif' : 'Hind Siliguri, sans-serif'
})