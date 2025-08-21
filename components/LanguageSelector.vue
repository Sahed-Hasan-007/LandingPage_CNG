<template>
  <div class="relative w-36">
    <button
      @click="isOpen = !isOpen"
      class="bg-gray-100 border-2 border-[#113d72] rounded-full px-4 py-[7px] text-[#113d72] flex items-center justify-between w-full transition-all duration-300"
    >
      <Icon size="16" :name=selectedLanguage.icon class="mr-2" />
      <span class="font-bold">{{ selectedLanguage.label }}</span>
      <Icon
        size="20"
        name="mdi:chevron-down"
        :class="isOpen ? 'rotate-180' : 'rotate-0'"
        class="transition-transform duration-300 ml-auto"
      />
    </button>

    <div
      v-if="isOpen"
      class="absolute left-0 top-full w-full bg-white border border-[#052151] rounded-md shadow-md mt-2"
    >
      <div
        v-for="(lang, index) in languages"
        :key="index"
        @click="selectLanguage(lang.value)"
        class="flex items-center px-4 py-2 cursor-pointer hover:bg-[#1565ce] hover:text-white"
      >
        <Icon :name="lang.icon" class="mr-4" />
        <span>{{ lang.label }}</span>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const {selectedLang} = useSelectedLang(); //composable
const isOpen = ref(false);

const selectedLanguage = ref(selectedLang.value||{ label: "ENG", value: "en", icon:"flag:us-4x3" });
const emit = defineEmits(['selectLang'])

const languages = [
  { label: "ENG", value: "en" , icon:"flag:us-4x3" },
  { label: "বাংলা", value: "bn",icon:"flag-bd-4x3" },
];

watch(selectedLang,()=>{
selectedLang.value?selectedLanguage.value=selectedLang.value:''; 
})
const selectLanguage = (value) => {
  selectedLanguage.value = languages.find((lang) => lang.value === value);
  selectedLang.value = selectedLanguage.value;
  locale.value = value;
  isOpen.value = false;
  emit("selectLang");
};
</script>
