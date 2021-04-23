<style
  lang="scss"
  src="./gallery.scss"
  scoped>
</style>

<template>
  <b-container fluid class="gallery">
    <b-row 
      v-if="!squared"
      no-gutters 
      class="gallery__content"
    >
      <div class="col-12 col-md-3">
        <img
          :src="require(`~/assets${images.image1.src}`)"
          :alt="images.image1.alt"
          loading="lazy"
          class="gallery__image gallery__image--1"
        >
      </div>
      <div class="col-12 col-md-3">
        <img
          :src="require(`~/assets${images.image2.src}`)"
          :alt="images.image2.alt"
          loading="lazy"
          class="gallery__image gallery__image--2"
        >
      </div>
      <div class="col-12 col-md-6">
        <img
          :src="require(`~/assets${images.image3.src}`)"
          :alt="images.image3.alt"
          loading="lazy"
          class="gallery__image gallery__image--3"
        >
      </div>
    </b-row>
    <b-row 
      v-else
      no-gutters
    >
      <div class="col-12">
        <img
          :src="require(`~/assets${images.image4.src}`)"
          :alt="images.image4.alt"
          loading="lazy"
          width="100%"
          height="auto"
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
    },
    squared: {
      type: Boolean,
      default: false
    }
  }
}
</script>
