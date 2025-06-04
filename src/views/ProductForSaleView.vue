<template>
<v-container>

    <v-row class="text-center">
      <v-col cols="12">
<h1 style="color: blueviolet; background-color: pink;">Welcome To Baby Store</h1>        {{order}}
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="6" v-for="product in products" :key="product.id">
        <forEachProductView :pp="product"
          @event-like-click="likecount"
          @event-cart-click="handleaddToCart">
        <template #name>
          <div style="color:red;">{{ product.name }}

          </div>

        </template>
        <template #price>
          <div v-if="product.dis" style="color:blue; text-decoration:line-through;"> Price: {{ product.price }}</div>
          <div v-else style="color:blue;">Price: {{ product.price }}</div>
            <div v-if="product.dis">Discount: ({{ product.dis }}%) : {{ product.price -(product.price*product.dis/100) }}</div>
          

        </template>
        <template #size>
          <div>{{ product.size }}</div>
        </template>
        <template #description>
          <div>{{ product.description }}</div>
        </template>
        <template #Like>
          <v-btn color="orange" prepend-icon="mdi-thumb-up">{{ product.like }}</v-btn>
        </template>
        <template #Cart>
          <v-btn color="orange" :disabled="product.flag" text="Cart" prepend-icon="mdi-cart-check" ></v-btn>
        </template>
      </ForEachProductView>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ForEachProductView from './ForEachProductView.vue';
import { mapActions } from 'vuex';
export default{
    //data(){
      //  return({
        //order:""
        //})

   // },
   components:{ForEachProductView},
   data:() => ({
    order:"",
    products:[ { id:1,like: 0, flag:false, name:"Panda", 
    src:["https://keaiart.com/cdn/shop/products/baby-panda-plush-doll-18246688374938.jpg?v=1595851277"],price:15000,size: "1\"-2'", description:"(Panda)  Soft, cuddly, and irresistibly cute! This panda plush is perfect for hugs and snuggles. Its gentle eyes and chubby cheeks make it a favorite for kids and panda lovers alike."},
     { id:2,like: 0,flag:false, dis:10,name:"Monkey", 
     src:["https://media.istockphoto.com/id/840509930/photo/soft-animal-monkey-on-a-white-background.jpg?s=612x612&w=0&k=20&c=99mM0sPQM_OSgoAa6wfkW6-EW-B1Ywn5YFY79LidFjs="],price:25000,size: "1\"-2'", description:"(Monkey)  Meet the playful monkey doll with a big smile and swinging arms! Made from ultra-soft fabric, this cheeky little friend brings joy and energy to playtime. "},
     { id:3,like: 0, flag:false,name:"Dog", 
     src:["https://www.shutterstock.com/image-photo/dog-plushie-doll-isolated-on-600nw-1901346739.jpg"],price:5000,size: "1\"-2'", description:"(Dog)  Loyal, loving, and fluffy! Our dog doll features adorable floppy ears and a heartwarming expression—your child’s new best buddy for bedtime and adventures. "},
     { id:4,like: 0,flag:false, dis:10,name:"Cat",
      src:["https://static.wikitide.net/poserdazfreebieswiki/thumb/6/68/Wrytersfyre-Cat_Doll.png/250px-Wrytersfyre-Cat_Doll.png"],price:5000,size: "1\"-2'", description:"(Cat)  With sparkling eyes and a super soft tail, this cat doll is a purr-fect companion. Whether you love kittens or just want a cozy plush friend, this cutie is hard to resist. "},
     { id:5,like: 0,flag:false, name:"Cinderella",
      src:["https://i.pinimg.com/736x/64/88/e6/6488e6948dc07838c730bf5da1570458.jpg"],price:25000,size: "1\"-2'", description:"(Cinderella)  Step into a fairytale with our stunning Cinderella doll! Dressed in her signature blue gown with sparkling details, she’s ready to bring magic and dreams to life."}]
    
   }),
    methods:{
      ...mapActions(['addToCart']),

      handleaddToCart(product){
        if(product.flag==false){
      product.flag=true;
      this.addToCart(product)
        }
      },

      likecount(pp){
        pp.like=pp.like+1

      },
     // AddToCart(pp){
       // pp.flag=!pp.flag;
       // console.log(pp.name)

    //  }
        
    },
    async created(){

       await new Promise(resolve=>
       setTimeout(()=>{
        this.order=("You can order now"); resolve();

       },5000)
    )
    }

}

</script>