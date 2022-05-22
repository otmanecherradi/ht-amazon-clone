<template>
  <div class="grow block p-6 rounded-lg shadow-lg bg-white w-full">
    <form @submit.prevent="loginCLick">
      <div class="form-group mb-6">
        <label for="emailInput" class="form-label inline-block mb-2 text-gray-700">Email address</label>
        <input v-model="user.email" type="email" class="form-control
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
        <label for="passwordInput" class="form-label inline-block mb-2 text-gray-700">Password</label>
        <input v-model="user.password" type="password" class="form-control block
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
      <div class="flex justify-between items-center mb-6">
        <div class="form-group form-check">
          <input type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck2">
          <label class="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
        </div>
        <a href="#!"
          class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
          password?</a>
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
    <div v-if="msg != null"
      class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
      role="alert">
      <span class="font-medium">{{ msg }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => {
    return {
      user: {},
      msg: null,
    }
  },
  methods: {
    loginClick() {
      axios.post('http://localhost:8080', this.user).then(function () {
        window.location.href = "http://localhost:3000/";
      }).catch(function () {
        this.msg = "please check the form for errors";
      });
    }
  }
}
</script>
