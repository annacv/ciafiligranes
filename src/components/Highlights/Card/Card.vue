<style
  lang="scss"
  src="./card.scss"
  scoped>
</style>

<template>
  <div class="card">
    <a
      :href="link"
      class="card__link"
    >
      <img
        :src="require(`~/assets${image}`)"
        :alt="alt"
        :aria-label="alt"
        loading="lazy"
        class="card__image"
      >
      <div class="card__content">
        <div>
          <h4
            class="card__title"
            v-text="title"
          />
          <h4
            class="card__name"
            v-text="name"
          />
        </div>
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
