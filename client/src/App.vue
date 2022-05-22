<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/global/AppHeader.vue'
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div>
        <app-header />
        <router-view />
      </div>
    </div>
  </div>
</template>