<script setup lang="ts">
import Navbar from "~/components/common/Navbar.vue";
import Footer from "~/components/common/Footer.vue";

</script>

<template>
  <main class="bg-[#fbfbfb] ">
    <div>
      <Navbar/>
    </div>
    <main class="overflow-x-hidden">
      <slot ></slot>
    </main>
    <!-- <div>
      <Footer/>
    </div> -->
  </main>
</template>

<style scoped>

</style>