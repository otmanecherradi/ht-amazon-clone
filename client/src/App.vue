<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/global/AppHeader.vue'
</script>

<template>
  <div class="container mx-auto">

    <app-header />
    <router-view />


  </div>
</template>
