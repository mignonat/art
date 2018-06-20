<template>
  <q-page class="flex flex-center">
    <q-carousel
      color="white"
      arrows
      quick-nav
      height="500px"
      :thumbnails="[
        'assets/images/paint/paint1.jpg',
        'assets/images/paint/paint2.jpg',
        'assets/images/paint/paint3.jpg',
        'assets/images/paint/paint4.jpg',
        'assets/images/paint/paint5.jpg'
      ]">
      <q-carousel-slide img-src="assets/images/paint/paint1.jpg" />
      <q-carousel-slide img-src="assets/images/paint/paint2.jpg" />
      <q-carousel-slide img-src="assets/images/paint/paint3.jpg" />
      <q-carousel-slide img-src="assets/images/paint/paint4.jpg" />
      <q-carousel-slide img-src="assets/images/paint/paint5.jpg" />
    </q-carousel>
  </q-page>
</template>

<style>
.q-carousel {
  width: 60%;
}
</style>

<script>
export default {
  name: 'PaintPage'
}
</script>
