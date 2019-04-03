<style
  lang="scss"
  src="./socialIcons.scss"
  >
</style>

<template>
  <div class="social-icons">
    <a
      :href="link"
      target="__blank"
      rel="nofollow noopener"
      class="social-icons__link"
    >
      <img
        :src="require(`~/assets${image}`)"
        :alt="alt"
        :aria-label="alt"
        class="social-icons__image"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',

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
