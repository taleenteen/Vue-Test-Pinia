<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "/src/components/Navbar.vue";
import "primeicons/primeicons.css";
import FooterComponent from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen">
    <div class="font-custom">
      <NavbarComponent />
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RouterView />
    </div>
    <FooterComponent class="sticky top-[100vh]" />
  </div>
</template>
