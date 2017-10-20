<template>
    <section>
        <save-product-form :product="productInForm" v-on:submit="onFormSave" v-on:cancel="resetProductInForm"></save-product-form>
        <product-list :products="products" v-on:edit="onEditClick" v-on:delete="onDeleteClick"></product-list>
    </section>
</template>
<script>
import uuid from 'uuid'
import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'
import { mapActions,mapGetters} from 'vuex'

const initialData = () => {
    return {
        productInForm: {
            id: null,
            name: '',
            description: '',
            price: null
        }
    }
}


export default {
    components: {
        ProductList,
        SaveProductForm
    },
    data: initialData,
    computed: mapGetters({
        products:'getProducts'
    }),
    methods: {
        ...mapActions([
            'saveProduct',
            'deleteProduct']),
        onFormSave(prodcut) {
            this.saveProduct(prodcut);
            this.resetProductInForm()
        },
        resetProductInForm() {
            this.productInForm = initialData().productInForm;
        },
        onEditClick(prodcut) {
            this.productInForm = { ...prodcut };

        },
        onDeleteClick(productId) {
            this.deleteProduct(productId);
            if (productId === this.productInForm.id) {
                this.resetProductInForm()
            }
        }
    }
}


</script>