<template>
  <div class="relative w-36">
    <button
        @click="isOpen = !isOpen"
        :class="[
        'relative overflow-hidden backdrop-blur-sm border rounded-xl px-4 py-2.5 flex items-center justify-between w-full transition-all duration-300 group',
        isOpen 
          ? 'bg-white/90 dark:bg-slate-800/90 border-green-200 dark:border-green-600 shadow-lg ring-2 ring-green-100 dark:ring-green-900/30'
          : 'bg-white/70 dark:bg-slate-800/70 border-slate-200 dark:border-slate-600 hover:bg-white/90 dark:hover:bg-slate-800/90 hover:border-green-200 dark:hover:border-green-500 hover:shadow-md'
      ]"
    >
      <!-- Gradient overlay on hover -->
      <div class="absolute inset-0 bg-gradient-to-r from-green-50/0 to-green-100/0 group-hover:from-green-50/20 group-hover:to-green-100/10 dark:group-hover:from-green-900/10 dark:group-hover:to-green-800/5 transition-all duration-300"></div>

      <div class="relative flex items-center z-10">
        <Icon
            size="18"
            :name="selectedLanguage.icon"
            class="mr-2 transition-transform duration-300 group-hover:scale-110"
        />
        <span class="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
          {{ selectedLanguage.label }}
        </span>
      </div>

      <Icon
          size="18"
          name="mdi:chevron-down"
          :class="[
          'transition-all duration-300 ml-2 text-slate-500 dark:text-slate-400',
          isOpen ? 'rotate-180 text-green-600 dark:text-green-400' : 'rotate-0 group-hover:text-green-600 dark:group-hover:text-green-400'
        ]"
      />
    </button>

    <!-- Dropdown Menu -->
    <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95 translate-y-[-10px]"
        enter-to-class="transform opacity-100 scale-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100 scale-100 translate-y-0"
        leave-to-class="transform opacity-0 scale-95 translate-y-[-10px]"
    >
      <div
          v-if="isOpen"
          class="absolute left-0 top-full w-full z-50 mt-2 origin-top"
      >
        <div class="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200 dark:border-slate-600 rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/5 overflow-hidden">
          <div
              v-for="(lang, index) in languages"
              :key="index"
              @click="selectLanguage(lang.value)"
              :class="[
              'relative flex items-center px-4 py-3 cursor-pointer transition-all duration-200 group',
              selectedLanguage.value === lang.value
                ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400'
            ]"
          >

            <Icon
                :name="lang.icon"
                size="20"
                class="mr-3 transition-transform duration-200 group-hover:scale-110"
            />
            <span class="font-medium">{{ lang.label }}</span>

            <!-- Check mark for selected item -->
            <Icon
                v-if="selectedLanguage.value === lang.value"
                name="mdi:check"
                size="16"
                class="ml-auto text-green-600 dark:text-green-400"
            />
          </div>
        </div>
      </div>
    </transition>

    <!-- Backdrop to close dropdown -->
    <div
        v-if="isOpen"
        @click="isOpen = false"
        class="fixed inset-0 z-40"
    ></div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const { selectedLang } = useSelectedLang(); // composable
const isOpen = ref(false);
const selectedLanguage = ref(selectedLang.value || { label: "ENG", value: "en", icon: "flag:us-4x3" });
const emit = defineEmits(['selectLang']);

const languages = [
  { label: "ENG", value: "en", icon: "flag:us-4x3" },
  { label: "বাংলা", value: "bn", icon: "flag-bd-4x3" },
];

watch(selectedLang, () => {
  selectedLang.value ? selectedLanguage.value = selectedLang.value : '';
});

const selectLanguage = (value) => {
  selectedLanguage.value = languages.find((lang) => lang.value === value);
  selectedLang.value = selectedLanguage.value;
  locale.value = value;
  isOpen.value = false;
  emit("selectLang");
};

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative.w-36')) {
      isOpen.value = false;
    }
  });
});
</script>

<style scoped>
/* Custom scrollbar for dropdown if needed */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.5);
}
</style>