<style
  lang="scss"
  src="./card.scss"
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
        <div class="card__btn">
          <Button
            :button="button"
          />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Button from '../../Button/Button'

export default {
  name: 'Card',

  components: {
    Button
  },

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
    },

    button: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
