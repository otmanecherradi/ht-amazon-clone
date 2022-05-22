<template>
<div>

<ProductCardVue 
id="1"
  name="The Coldest Sunset"
 description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
 price="200"
 price_old="199"
 img_url="https://www.consejosdetufarmaceutico.com/wp-content/uploads/2020/02/La-Roche-Posay.jpg">
 </ProductCardVue>
</div>
</template>
<script>
import ProductCardVue from '../components/ProductCard.vue'
export default{
    name:'ProductView',
    components:{
         ProductCardVue
    }

}

</script>
