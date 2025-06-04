<template>
  <v-app>
    <v-app-bar height="50" color="primary">
      <router-link to="/" >Home</router-link>
      <v-spacer></v-spacer>
     
        <v-badge
        color="error"
        :content="cartItemCount"
        @click="toOrderView">
              <v-icon icon="mdi-cart" size="x-large"></v-icon>
            </v-badge>
    
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

  },
  methods:{
    toOrderView(){
      if(this.cartItemCount<=0) this.$router.push("/")
      else this.$router.push("/cart")
    }
  }
}
</script>
