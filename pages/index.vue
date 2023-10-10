<template>
  <div>
    <Nav />
    <HomeCarousel :sale_items="sale_items" />
    <v-row class="mb-8" />
    <v-container>
      <h1 class="text-md-h4 text-h6 mb-4">Check out these items</h1>
      <ProductSlider :products="products" />
      <v-row class="mb-8" />
      <Newsletter />
    </v-container>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
import HomeCarousel from '../components/HomeCarousel.vue';

export default {
    async created() {
        this.sale_items = await this.$content('products').where({ onSale: true }).fetch();
        this.products = await this.$content('products').fetch();
    },
    data() {
        return {
            products: null,
            sale_items: null,
        };
    },
    components: { HomeCarousel }
}
</script>

<style>

</style>
