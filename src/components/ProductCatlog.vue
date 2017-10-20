<template>
  <div>
    <ul v-for="product in products">
      <li>{{product.name}}</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "product-catlog",
  computed: mapGetters({
    products: "getProducts"
  })
};
</script>