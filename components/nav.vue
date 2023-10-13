<template>
 <div>
  <v-app-bar
    color="surface"
    height="80"
    class="el"
    app
    :style="{padding : $vuetify.breakpoint.mdAndUp ? '0px 100px' : ''}"
  >
    <v-toolbar-title @click="$router.push('/')" class="text-md-5 font-weight-bold pointer">
      eCommerce
    </v-toolbar-title>
    <v-spacer/>
    <v-btn nuxt to="/products" icon class="mr-2">
      <v-icon size="20">mdi-store-outline</v-icon>
    </v-btn>

    <v-badge
      overlap
      :content="$store.state.cart.cart.length"
      v-if="$store.state.cart.cart.length > 0"
    >
      <v-btn nuxt to="/cart" icon>
        <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>
    </v-badge>

      <v-btn v-else nuxt to="/cart" icon>
        <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>

    <v-divider vertical class="mx-md-5 mx-2" />

    <v-btn @click="toggleDarkMode" icon>
      <v-icon size="20">mdi-brightness-7</v-icon>
    </v-btn>
  </v-app-bar>
 </div>
</template>

<script>
export default {
  data: () => ({
      darkMode: false
    }),
    methods: {
      toggleDarkMode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
    },
};
</script>

<style>

</style>
