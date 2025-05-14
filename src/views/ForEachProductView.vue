<template>
    <v-card
      class="mx-auto"
      max-width="400"
      
    >
      <v-img
        class="align-end text-white"
        height="200"
        :src=pp.src
        cover
      >
        <v-card-title><slot name="name"></slot></v-card-title>
      </v-img>
  
      <v-card-subtitle class="pt-4">
        {{ pp.size }}
      </v-card-subtitle>
  
      <v-card-text>
        <div><slot name="price"></slot></div>
       {{ pp.description }}
      </v-card-text>
  
      <v-card-actions>
        <div @click="likeCount">
          <slot name="Like"></slot>
        </div>
        <div @click="AddToCart">
          <slot name="Cart"></slot>
        </div>
  
       
      </v-card-actions>
    </v-card>
  </template>
  <script>
  export default {
    props:{
      pp:{
        type:Object
      }
    },
    methods:{
      likeCount(){
        this.$emit("event-like-click", this.pp)
      },
      AddToCart(){
        this.$emit("event-cart-click", this.pp)
      }
    }
  }
</script>