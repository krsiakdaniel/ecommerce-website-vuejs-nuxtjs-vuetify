<template>
  <div>
    <Nav />
    <HomeCarousel :sale_items="sale_items" />
    <Footer />
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
