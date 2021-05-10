<style
  lang="scss"
  src="./synopsis.scss"
  scoped
  >
</style>

<template>
  <div class="synopsis">
    <b-container fluid class="synopsis__content">
      <b-row no-gutters align-v="center">
        <template v-if="reverse">
          <div class="col-12 col-lg-7 col-xxl-6">
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
                  <source
                    :srcset="require(`~/assets${image.src}`)"
                    media="(max-width: 767px) and (min-width: 479px)"
                  >
                  <img
                    :src="require(`~/assets${image.srcmobile}`)"
                    :alt="image.alt"
                    loading="lazy"
                    class="synopsis__image"
                  >
                </picture>
              </div>
            </b-row>
          </div>
          <div class="col-12 col-lg-5 col-xl-3 col-xxl-3 offset-xl-1">
            <div class="synopsis__info-container">
              <h3
                v-if="title"
                class="synopsis__title"
                v-text="title"
              />
              <p
                v-for="item in paragraphs"
                :key="item.paragraph"
                class="synopsis__paragraph"
                v-text="item.paragraph"
              />
              <ul
                v-if="socialicons.length > 0"
                class="social-icons__list">
                <li
                  v-for="item in socialicons"
                  :key="item.alt"
                  class="social-icons__list-item"
                >
                  <SocialIcons
                    v-if="item.alt"
                    :alt="item.alt"
                    :image="item.image"
                    :link="item.link"
                  />
                </li>
              </ul>
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
          </div>
        </template>
        <template v-else>
          <div class="col-12 col-lg-5 col-xl-3 col-xxl-3 offset-xl-1 offset-xxl-2 ">
            <div class="synopsis__info-container">
              <h3
                v-if="title"
                class="synopsis__title"
                v-text="title"
              />
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
          </div>
          <div class="col-12 col-lg-7 col-xxl-6 offset-xl-1 offset-xxl-1">
            <b-row>
              <div class="synopsis__image-container">
                <picture>
                  <source
                    :srcset="require(`~/assets${image.srcset}`)"
                    media="(min-width: 992px)"
                  >
                  <source
                    :srcset="require(`~/assets${image.src}`)"
                    media="(min-width: 768px)"
                  >
                  <source
                    :srcset="require(`~/assets${image.src}`)"
                    media="(max-width: 767px) and (min-width: 479px)"
                  >
                  <img
                    :src="require(`~/assets${image.srcmobile}`)"
                    :alt="image.alt"
                    loading="lazy"
                    class="synopsis__image"
                  >
                </picture>
              </div>
            </b-row>
          </div>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FiliButton from '~/components/FiliButton/FiliButton'
import SocialIcons from '../SocialIcons/SocialIcons'

export default {
  name: 'Synopsis',

  components: {
    FiliButton,
    SocialIcons
  },

  props: {
    buttons: {
      type: Array,
      default: () => []
    },

    image: {
      type: Object,
      default: () => {}
    },

    paragraphs: {
      type: Array,
      default: () => [],
      required: true
    },

    reverse: {
      type: Boolean,
      default: false
    },

    socialicons: {
      type: Array,
      default: () => []
    },

    title: {
      type: String,
      default: ''
    }
  }
}
</script>
