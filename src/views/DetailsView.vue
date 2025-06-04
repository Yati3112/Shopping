<template>
   <v-container>
    <h1> {{ product.name }}</h1>
    <v-row>
        <v-col cols="6" v-for="image in product.src" :key="image">
            <img :src="image">
        </v-col>
    </v-row>
    <v-row><v-col cols="12"> {{ product.description }}</v-col></v-row>
    <v-row><v-col cols="12">Price: {{ product.price }}</v-col></v-row>
    <v-row><v-col cols="12">Size: {{ product.size }}</v-col></v-row>
    <v-row><v-col cols="12">Like Count: {{ product.like }}</v-col></v-row>
    
    
   </v-container>
</template>

<script>
export default{
    data(){
        return({
            product:{

            }
        })
    },
    created(){
       this.product=JSON.parse(this.$route.params.item)
    }
}
</script>