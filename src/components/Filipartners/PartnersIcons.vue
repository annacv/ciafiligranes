<style
  lang="scss"
  src="./filipartners.scss"
  scoped
  >
</style>

<template>
  <div class="filipartners-icons">
    <a
      :href="link"
      target="__blank"
      rel="nofollow noopener"
      class="filipartners-icons__link"
    >
      <img
        :src="require(`~/assets${image}`)"
        :alt="alt"
        :aria-label="alt"
        class="filipartners-icons__image"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'PartnersIcons',

  props: {
    alt: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: ''
    }
  }
}
</script>
