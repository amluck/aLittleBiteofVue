<template>
  <form>
      <div class="form-group">
          <label for="ProductName">Product Name</label>
          <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
      </div>
      <div class="form-group">
          <label for="Description">Description</label>
          <input type="text" v-model="product.description" class="form-control" id="description" maxlength="120" placeholder="Enter Product Description">
      </div>
      <div class="form-group">
          <label for="Price">Price</label>
          <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter Prodcut Price">
      </div>
      <button type="submit" v-on:click.prevent="onSubmit"></button>
  </form>
</template>
<script>
    export default{
        props:['product'],
        methods:{
            onSubmit(){
                this.$emit('submit',this.product)
            }
        }
    }
</script>