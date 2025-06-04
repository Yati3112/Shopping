<template>
 <v-container>
   <v-row>
      <v-col cols="12" v-for="item in getcartItem" :key="item.id">
         <ForEachProductView :pp="item"
            @event-inc-qty="IncQty"
            @event-dec-qty="DecQty"
            @event-remove-click="RemoveFromCart"
            @event-details-click="GoDetails">
         <template #name>
          <div style="color:red;">{{ item.name }}

          </div>
         </template>
          <template #price>
          <div v-if="item.dis" style="color:blue; text-decoration:line-through;"> Price: {{ item.price }}</div>
          <div v-else style="color:blue;">Price: {{ item.price }}</div>
            <div v-if="item.dis">Discount: ({{ item.dis }}%) : {{ item.price -(item.price*item.dis/100) }}</div>
          

        </template>
        <template #inc>Quantity<v-btn>+</v-btn></template>
        <template #qty> {{ item.qty }} </template>
        <template #dec> <v-btn :disabled="item.qty<=0">-</v-btn></template>
        <template #remove><v-btn> remove</v-btn></template>
        <template #details><v-btn>Details</v-btn></template>
      </ForEachProductView>
      </v-col>
   </v-row>
   <v-row class="my-12">
      <v-col cols="12">
         <v-btn width="100%" color="green" @click="Paybill">Bill</v-btn>
      </v-col>
   </v-row>
 </v-container>
</template>
<script>

import { mapActions, mapGetters } from 'vuex';
import ForEachProductView from './ForEachProductView.vue';

export default{

   components:{ForEachProductView},
   created(){
       if(this.$store.getters.cartItemCount <=0)
       this.$router.push("/")
   },
   computed:{
      ...mapGetters(['getcartItem'])
   },
   methods:{
      ...mapActions(['cartItemCount']),

      ...mapActions(['RemoveFromCart']),

      IncQty(product){
         product.qty++;
      },
      DecQty(product){
         if(product.qty>0)
         product.qty--;
      },
      /*RemoveProduct(product){
        console.log("to remove product",product)
      }*/
     GoDetails(product){
      this.$router.push({
         name:"details",
         params:{
            item:JSON.stringify(product)
         }
      })
     },
     Paybill(){
      this.$router.push("/bill")
     }
   }

}
</script>