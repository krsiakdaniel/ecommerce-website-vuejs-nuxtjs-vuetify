<template>
  <div>
    <Nav />
    <br />
    <div class="text-center" v-if="$store.state.cart.cart.length == 0">
      <v-img class="d-block mx-auto my-8" src="/emptycart.svg" width="128"></v-img>
      <p>There are no items in your cart.</p>
      <p @click="$router.push('/products')" class="blue--text pointer">← Go back to products</p>
    </div>
    <v-container v-else>
      <div class="mb-3" v-if="$store.state.cart.cart.length > 0">
        <v-btn nuxt to="/cart" min-width="150" min-height="45" depressed>Back to cart</v-btn>
        <v-btn @click="order" min-width="150" min-height="45" color="primary">Confirm order</v-btn>
      </div>
      <div class="mt-8">
        <p>Congratulations. You made it to confirm page.</p>
        <p>The next step would be your shipping details and payment info.</p>
      </div>
    </v-container>
    <br /><br />
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
  // swal = sweetalert2
  methods: {
    async order() {
      await this.$swal({
        title: "Order was confirmed.",
        icon: "success",
        allowEscapeKey: true,
        allowOutsideClick: true,
        timer: 4000,
        timerProgressBar: true,
        text: "This is end of the demo.",
        showConfirmButton: true,
      });
    },
  },
};
</script>

<style></style>
