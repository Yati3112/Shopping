<template>
    <v-container>
        <div><h1 style="color:skyblue; text-align:center">Baby Store</h1></div>
        <div class="flex-container">
            <div> {{ date }}</div>
            <div>Address: Yangon</div>
        </div>
        <div><a href="/">@BabyStore</a></div>
        <div> <h1 style="color: skyblue; text-align: center;">Bill</h1></div>
      
        <v-table theme="light">
            <thead>
                <tr>
                    <th class="text-left">
                        Items
                    </th>
                    <th class="text-left">
                        Price per Unit
                    </th>
                    <th class="text-left">

                    </th>
                    <th class="text-left">
                        Qty
                    </th>
                    <th class="text-left">
                        Price 
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in getcartItem"
                :key="item.id">
            
            <td>{{ item.name }}</td>
            <td>{{ item.price }}
                <div v-if="item.dis">
                    Discount{{ item.dis }}
                </div>
            </td>
            <td>x</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.price*item.qty }}
                <div v-if="item.dis">
                   - {{  item.price * item.qty * (item.dis/100) }}
                </div>
            </td>    
            </tr>
            <tr>
                <td></td><td></td><td></td><td>+</td><td>{{ total }}</td>
                </tr><tr>
                <td>Discount</td><td></td><td></td><td>-</td><td>{{ discount }}</td></tr>
                <tr>
                <td>Total</td><td></td><td></td><td></td><td>{{ total-discount }}</td>
            </tr>
            </tbody>
        </v-table>
        <div class="dashed-line my-4"></div>
        <p style="text-align: center;">Thank You</p>
        <div class="dashed-line"></div>

        <v-row class="my-12">
            <v-col cols="12">
                <v-btn width="100%" color="green" @click="Finished">Finished</v-btn>
            </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script>
import { mapGetters } from 'vuex';

export default{
    data(){
        return({
        date:"",
        cartItem:[],
        total:0,
        discount:0

    })
    },
    created(){
        this.date=new Date().toDateString()
        this.calculateTotal()
        this.calculateDiscount()
    },
    computed:{
        ...mapGetters(['getcartItem'])
    },
    methods:{
    calculateTotal(){
    this.cartItem=this.getcartItem
    let eachdoll= this.cartItem.map(doll => doll.price* doll.qty);
    this.total=eachdoll.reduce((x,y)=> x+y)
    },
      calculateDiscount(){
    this.cartItem=this.getcartItem
    let disDoll=this.cartItem.filter(doll=> doll.dis)
    let eachdoll= disDoll.map(doll => (doll.price* doll.qty) *(doll.dis/100));
    this.discount=eachdoll.reduce((x,y)=> x+y)
    },
    Finished(){
        this.$store.dispatch('ClearCart')
        this.$router.replace("/")
    }
}
}

</script>
<style>
.flex-container{
  display: flex;
  justify-content: space-between;
  widows: 100%;
  padding: 8px;
}
.dashed-line {
    border-bottom: 1px dashed black;
   
  }
</style>