<template>
  <v-card tile flat class="pa-md-10 pa-5 text-center" color="surface">
    <h2 class="text-md-h6 font-weight-bold">eCommerce</h2>
    <div class="text-center">
      <v-btn
        v-for="(b,i) in sm" :key="`socialMedia-${i}`"
        color="surface"
        class="mr-2"
        fab
        depressed
      >
      <v-icon>{{ b.icon }}</v-icon>
      </v-btn>
      </div>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      sm: [
        { icon: "mdi-facebook", link: "#" },
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-youtube", link: "#" },
      ]
    }
  },
}
</script>

<style>

</style>
