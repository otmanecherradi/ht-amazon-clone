<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" :src="img_url" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{name}}
    </div>
    <p class="text-gray-700 text-base">
    {{description.substring(0,40)}}.....
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{price}} DH</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 line-through">{{price_old}} DH</span>
     <a :href="'/Product/'+this.id" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Details
</a>
     </div>
      
</div>
</template>

<script>
export default{
     name:'ProductCard',
     props:['id','name','description','price','price_old','img_url']

}

</script>