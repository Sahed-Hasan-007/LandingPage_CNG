<script setup lang="ts">
import Navbar from "~/components/common/Navbar.vue";
import Footer from "~/components/common/Footer.vue";

</script>

<template>
  <main>
    <div>
      <Navbar/>
    </div>
    <div>
      <slot ></slot>
    </div>
    <div>
      <Footer/>
    </div>
  </main>
</template>

<style scoped>
main {
  background: linear-gradient(to bottom, #e0edff, #f6faff);
}
</style>