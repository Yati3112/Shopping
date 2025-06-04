<template>
  <div class="about">
    <h1 style="background-color: pink; color: crimson; text-align: center; padding: 20px;">
      Welcome To Our Baby Store
    </h1>

    <img
      :src="about.src"
      alt="Baby Shop"
      style="max-width: 100%; height: auto; margin: 20px 0;"
    />

    <p style="text-align: left; white-space: pre-line; padding: 0 20px;">
      {{ about.description }}
    </p>

    <div class="dashed-line my-4"></div>
    <h2>
      <p style="text-align: center; color: red; background-color: pink;">
        Thank You <a href="/" style="color: crimson;">@BabyStore</a>
      </p>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      about: {
        src: "https://thumbs.dreamstime.com/z/illustration-kid-toy-store-interior-happy-baby-girl-her-mother-shopping-little-gift-teddy-bears-dolls-315513063.jpg",
        description: "Welcome to our Baby Store — a warm, friendly place where love, comfort, and quality come together for your little ones. We know that caring for a baby is one of life’s greatest joys, and we’re here to make your journey easier and more delightful. From soft cuddly toys and adorable baby clothes to gentle skincare and baby essentials, we carefully select each product with love, safety, and quality in mind. Our mission is simple: to offer products that are safe, affordable, and made with care — because your baby deserves the best. Thank you for choosing us to be part of your beautiful journey. We’re more than just a store — we’re a place full of love, comfort, and joy for every baby and parent."
      }
    };
  }
};
</script>

<style>
.about {
  padding: 20px;
  text-align: center;
}

.dashed-line {
  border-top: 2px dashed crimson;
  margin: 30px 0;
}
</style>
