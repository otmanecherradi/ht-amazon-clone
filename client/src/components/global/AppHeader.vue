<template>
  <div class="grow hidden w-full md:block md:w-auto" id="mobile-menu">
    <ul class="flex justify-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <router-link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</router-link>
      </li>
      <li>
        <router-link to="/login" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">login</router-link>
      </li>
      <li>
        <router-link to="/register" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">register</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>