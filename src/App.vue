<template>
  <v-app>
    <v-app-bar height="50" color="primary">
      <router-link to="/" >Home</router-link>
      <v-spacer></v-spacer>
      <router-link to="/cart">
        <v-badge
        color="error"
        :content="cartItemCount">
              <v-icon icon="mdi-cart" size="x-large"></v-icon>
            </v-badge>
      </router-link>
      <router-link to="/about">About</router-link>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed:{
    ...mapGetters(['cartItemCount'])

  }
}
</script>
