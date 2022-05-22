<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/products'
const { products, loading } = storeToRefs(useProductStore())

const { loadProducts } = useProductStore()

loadProducts()

console.log(loading, products);
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4" v-for="product in products" :key="product.id">
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="h-64 w-full object-cover object-center" :src="product.img_url" alt="blog">
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ product.name }}</h1>

              <div class="flex items-center flex-wrap">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
