<style
  lang="scss"
  src="../highlights.scss"
  scoped>
</style>

<template>
  <div class="card">
    <img
      :src="require(`~/assets${image}`)"
      :alt="alt"
      class="card__image"
    >
    <a
      :href="link"
      class="card__link"
    >
      <div class="card__content">
        <h4
          class="card__title"
          v-text="title"
        />
        <h4
          class="card__name"
          v-text="name"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    alt: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    }
  }
}
</script>
