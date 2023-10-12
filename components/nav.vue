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
    <v-btn nuxt to="/products" icon>
      <v-icon size="20">mdi-store-outline</v-icon>
    </v-btn>
    <v-btn icon>
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
