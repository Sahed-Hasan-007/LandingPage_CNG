<template>
    <div id="service" class="container p-6 my-16 mx-auto max-w-[1300px]">

        <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
            <div class="flex flex-col gap-8">
                <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-4xl md:text-5xl lg:text-5xl font-bold">{{ $t('sectionFour.heading') }}</h1>
                <div>
                    <img src="/images/sectionFour/counterEnrollmember.png">
                </div>
            </div>
            <div>
                <img src="/images/sectionFour/asset1.png">
            </div>
        </div>

        <div class="flex flex-col md:flex-row md:gap-20 lg:gap-44 justify-between items-center mt-16">
            <div class="flex flex-col gap-8">
                <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-3xl md:text-3xl lg:text-4xl font-bold">Silver Membership <br> Program</h1>
                <div>
                    <img class="lg:w-[1200px]" src="/images/sectionFour/silverMembership.png">
                </div>
            </div>
            <div class="flex flex-col">
                <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="py-8">
                    <p >{{ $t('sectionFour.flagship_description') }}
                    </p>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="relative w-full max-w-[700px] rounded-lg overflow-hidden min-h-[150px] sm:min-h-[120px]">
                        <img class="w-full h-auto object-cover" src="/images/sectionFour/feature1bg.png"
                            alt="Feature Background">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-6 py-4">
                            <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-xl lg:text-2xl font-bold text-white">
                                <span class="text-yellow-400 italic">Lifetime Access</span> to Updated Modules
                            </p>
                            <p class="text-white text-lg mt-2">{{ $t('sectionFour.feature1Text') }}</p>
                        </div>
                    </div>
                    <div class="relative w-full max-w-[700px] rounded-lg overflow-hidden min-h-[150px] sm:min-h-[120px]">
                        <img class="w-full h-auto object-cover" src="/images/sectionFour/feature2bg.png"
                            alt="Feature Background">
                        <div
                            :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                            class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-6 py-4">
                            <p class="text-xl lg:text-2xl font-bold text-white">Weekly
                                <span class="text-yellow-400 italic">Live Classes</span> and Expert Webinars
                            </p>
                            <p class="text-white text-lg mt-2">{{ $t('sectionFour.feature2Text') }}</p>
                        </div>
                    </div>
                    <div class="relative w-full max-w-[700px] rounded-lg overflow-hidden min-h-[150px] sm:min-h-[120px]">
                        <img class="w-full h-auto object-cover" src="/images/sectionFour/feature3bg.png"
                            alt="Feature Background">
                        <div
                            :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                            class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-6 py-4">
                            <p class="text-xl lg:text-2xl font-bold text-white">
                                <span class="text-yellow-400 italic">Hands-On Support</span> From Industry Experts
                            </p>
                            <p class="text-white text-lg mt-2">{{ $t('sectionFour.feature3Text') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center pt-20">
            <button>
                <img src="/images/sectionFour/buttonImage.png" alt="image">
            </button>
        </div>


    </div>
</template>

<script>
import {useI18n} from "vue-i18n";

const { locale } = useI18n();
</script>
