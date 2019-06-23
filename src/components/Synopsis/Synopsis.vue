<style
  lang="scss"
  src="./synopsis.scss"
  scoped
  >
</style>

<template>
  <div class="synopsis">
    <b-container fluid class="synopsis__heading">
      <b-row no-gutters>
        <div class="col-12 col-md-5 col-lg-4 col-xl-4 offset-0 offset-md-1 offset-xxl-2">
          <h3
            class="synopsis__title"
            v-text="title"
          />
        </div>
      </b-row>
    </b-container>
    <b-container fluid class="synopsis__content">
      <b-row no-gutters align-v="center">
        <div class="col-12 col-md-10 col-lg-4 col-xl-4 col-xxl-3 offset-0 offset-md-1 offset-xxl-2">
          <p
            v-for="item in paragraphs"
            :key="item.paragraph"
            class="synopsis__paragraph"
            v-text="item.paragraph"
          />
          <div
            v-for="button in buttons"
            :key="button.class"
            class="synopsis__btn"
          >
            <FiliButton
              v-if="button"
              :button="button"
            />
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-7 col-xl-6 offset-0 offset-xl-1 offset-xxl-1">
          <b-row>
            <div class="synopsis__image-container">
              <picture>
                <source
                  :srcset="require(`~/assets${image.srcset}`)"
                  media="(min-width: 992px)"
                >
                <source
                  :srcset="require(`~/assets${image.src}`)"
                  media="(max-width: 768px)"
                >
                <img
                  :src="require(`~/assets${image.src}`)"
                  :alt="image.alt"
                  class="synopsis__image"
                >
              </picture>
            </div>
          </b-row>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FiliButton from '~/components/FiliButton/FiliButton'

export default {
  name: 'Synopsis',

  components: {
    FiliButton
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    paragraphs: {
      type: Array,
      default: () => [],
      required: true
    },

    image: {
      type: Object,
      default: () => {}
    },

    buttons: {
      type: Array,
      default: () => []
    }
  }
}
</script>
