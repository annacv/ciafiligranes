<style
  lang="scss"
  src="./theFooter.scss"
  scoped>
</style>

<template>
  <footer role="contentinfo">
    <b-container fluid class="footer__corp">
      <b-row no-gutters align-v="center">
        <div class="col-12 col-lg-2 col-xxl-1 col-xxxl-1 footer__brand">
          <nuxt-link
            :to="localePath('index')"
            :aria-label="logo"
          >
            <img
              :alt="logo"
              src="~assets/icons/ciafiligranes.svg"
              class="footer__image"
            />
          </nuxt-link>
        </div>
        <div
          class="col-12 col-md-8 col-lg-7 col-xl-5 col-xxl-5 col-xxxl-5 footer__contact"
        >
          <b-row
            no-gutters align-v="center"
            align-h="center"
          >
            <a
              :aria-label="email.arialabel"
              :href="email.href"
              class="contact__email"
              v-text="email.link"
            />
            <p class="contact__adress" v-text="adress" />
          </b-row>
        </div>
        <div
          class="col-12 col-md-4 col-lg-3 col-xxl-2 offset-xl-1 offset-xxl-2 footer__rrss"
        >
          <ul class="social-icons__list">
            <li
              v-for="item in socialicons"
              :key="item.alt"
              class="social-icons__list-item"
            >
              <SocialIcons
                :alt="item.alt"
                :image="item.image"
                :link="item.link"
              />
            </li>
          </ul>
        </div>
      </b-row>
    </b-container>
    <b-container fluid class="footer__credits">
      <b-row no-gutters>
        <div class="col-12 credits__content">
          <p class="credits__cia" v-text="cia" />
          <div
            v-for="(item, index) in credits"
            :key="item.text"
            class="credits__partners"
          >
            <p
              :id="'credit-link-'+`${index}`"
              class="credits__text"
              v-text="item.text"
            />
            <a
              :aria-label="item.arialabel"
              :href="item.href"
              :aria-describedby="'credit-link-'+`${index}`"
              target="__blank"
              rel="noopener nofollow"
              class="credits__link"
              v-text="item.link"
            />
          </div>
        </div>
      </b-row>
    </b-container>
    <b-container fluid class="footer__legal">
      <b-row no-gutters>
        <div class="col-12">
          <ul class="footer__legal-list">
            <li class="footer__legal-list-item">
              <nuxt-link
                :aria-label="legal.avis.aria"
                :to="localePath('avis-legal', $i18n.locale)"
                class="footer__legal-links"
                v-text="legal.avis.text"
              />
            </li>
            <li class="footer__legal-list-item">
              <nuxt-link
                :aria-label="legal.cookies.aria"
                :to="localePath('cookies', $i18n.locale)"
                class="footer__legal-links"
                v-text="legal.cookies.text"
              />
            </li>
          </ul>
        </div>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import SocialIcons from '../SocialIcons/SocialIcons'

export default {
  name: 'TheFooter',

  components: {
    SocialIcons
  },

  props: {
    socialicons: {
      type: Array,
      default: () => []
    },

    email: {
      type: Object,
      default: () => {}
    },

    adress: {
      type: String,
      default: ''
    },

    logo: {
      type: String,
      default: ''
    },

    cia: {
      type: String,
      default: ''
    },

    credits: {
      type: Array,
      default: () => []
    },

    legal: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
