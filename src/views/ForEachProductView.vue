<template>
    <v-card
      class="mx-auto"
      max-width="400"
      
    >
      <v-img
        class="align-end text-white"
        height="200"
        :src=pp.src[0]
        cover
      >
        <v-card-title><slot name="name"></slot></v-card-title>
      </v-img>
  
      <v-card-subtitle class="pt-4">
        <slot name="size"></slot>
      </v-card-subtitle>
  
      <v-card-text>
        <div><slot name="price"></slot></div>
        <slot name="description"></slot>
      </v-card-text>
  
      <v-card-actions>
        <div @click="likeCount">
          <slot name="Like"></slot>
        </div>
        <div @click="AddToCart">
          <slot name="Cart"></slot>
        </div>
        <span>
          <span @click="incQty"><slot name='inc'></slot></span>
          <slot name='qty'></slot>
          <span @click="decQty"><slot name='dec'></slot></span>
          <span @click="remove"><slot name="remove"></slot></span>
          <span @click="details"><slot name="details"></slot></span>
        </span>
       
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
      },
      incQty(){
        this.$emit("event-inc-qty",this.pp)
      },
      decQty(){
        this.$emit("event-dec-qty",this.pp)
      },
      remove(){
        this.$emit("event-remove-click",this.pp)
      },
      details(){
        this.$emit("event-details-click",this.pp)
      }
      
    }
  }
</script>