<template>
  <Navbar />
  <div class="container">
    <router-view></router-view>
  </div>
  <FooterSection />
</template>

<script setup>
import FooterSection from './components/FooterSection.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';


</script>

<style lang="scss" scoped></style>