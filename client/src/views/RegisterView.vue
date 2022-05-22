<template>
<div class="grow block p-6 rounded-lg shadow-lg bg-white w-full">
  <form @submit.prevent="loginCLick">
    <div class="form-group mb-6">
      <label for="emailInput" class="form-label inline-block mb-2 text-gray-700">Email address</label>
      <input 
      v-model="user.email"
      type="email" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="emailInput"
        aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group mb-6">
      <label for="nameImput" class="form-label inline-block mb-2 text-gray-700">name</label>
      <input 
      v-model="user.name"
      type="email" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="nameImput"
        aria-describedby="nameHelp" placeholder="Enter name">
    </div>
    <div class="form-group mb-6">
      <label for="phoneInput" class="form-label inline-block mb-2 text-gray-700">phone number</label>
      <input 
      v-model="user.phone"
      type="phone" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phoneInput"
        aria-describedby="nameHelp" placeholder="Enter phone">
    </div>
    <div class="form-group mb-6">
      <label for="addressInput" class="form-label inline-block mb-2 text-gray-700">address</label>
      <input 
      v-model="user.address"
      type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="addressInput"
        aria-describedby="nameHelp" placeholder="Enter address">
    </div>
    <div class="form-group mb-6">
      <label for="passwordInput" class="form-label inline-block mb-2 text-gray-700">Password</label>
      <input 
      v-model="user.password"
      type="password" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="passwordInput"
        placeholder="Password">
    </div>
    <div class="form-group mb-6">
      <label for="passwordInput" class="form-label inline-block mb-2 text-gray-700">Confirm Password</label>
      <input 
      v-model="user.passwordConfirm"
      type="password" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="passwordInput"
        placeholder="Confirm Password">
    </div>
    <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Sign in</button>
    <p class="text-gray-800 mt-6 text-center">Not a member? <a href="#!"
        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
    </p>
  </form>
  <div v-if="msg!=null" class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
  <span class="font-medium" >{{msg}}</span>
</div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  data: () => {
    return {
      user: {},
    };
  },
  methods:{
    registerClick() {
      axios.post('http://localhost:8080/api/users/register')
    }
  },
}
</script>