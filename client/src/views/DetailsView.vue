<template>
<div>
<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://www.consejosdetufarmaceutico.com/wp-content/uploads/2020/02/La-Roche-Posay.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p class="text-gray-600 text-xs">{{id}}</p>

      
    </div>
  </div>
</div>
</div>
</template>

<script>
export default{
  name:"DetailsView",
  data() {
    return {
      id:this.$route.params.id
    }
  },
  methods: {
        
  },
  created(){
   // alert(this.id)
  }      
}
</script>