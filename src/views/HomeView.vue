<template>
 <ProductForSaleView />
</template>

<script>
import { defineComponent } from 'vue';

// Components

import ProductForSaleView from './ProductForSaleView.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    ProductForSaleView

  },
});
</script>
