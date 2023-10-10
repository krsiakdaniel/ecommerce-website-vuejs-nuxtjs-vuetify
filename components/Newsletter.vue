<template>
  <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
    <h2 class="text-md-h3">Newsletter</h2>
    <p class="text-md-h6 mt-5">Subscribe to learn about sales!</p>
    <br />
    <v-sheet color="transparent" class="mx-auto" max-width="400">
      <v-text-field
        v-model="email"
        color="white"
        label="Email"
        outlined
      ></v-text-field>
      <v-btn @click="submit" outlined min-height="50" block>Subscribe</v-btn>
    </v-sheet>
  </v-card>
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
    async submit() {
      await this.$swal({
        title: "Thank you for subcription.",
        icon: "success",
        allowEscapeKey: true,
        allowOutsideClick: true,
        timer: 2000,
        timerProgressBar: true,
        text: "We will send you emails with sales.",
        showConfirmButton: true,
      });
    },
  },
};
</script>

<style></style>
