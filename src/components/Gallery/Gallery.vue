<style
  lang="scss"
  src="./gallery.scss"
  scoped>
</style>

<template>
  <b-container fluid class="gallery">
    <b-row no-gutters class="gallery__content">
      <div class="col-12 col-md-3">
        <img
          :src="require(`~/assets${images.image1.src}`)"
          :alt="images.image1.alt"
          class="gallery__image img--1"
        >
      </div>
      <div class="col-12 col-md-3">
        <img
          :src="require(`~/assets${images.image2.src}`)"
          :alt="images.image2.alt"
          class="gallery__image img--2"
        >
      </div>
      <div class="col-12 col-md-6">
        <img
          :src="require(`~/assets${images.image3.src}`)"
          :alt="images.image3.alt"
          class="gallery__image img--3"
        >
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Gallery',

  props: {
    images: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
