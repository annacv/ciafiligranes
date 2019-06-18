<style
  lang="scss"
  src="./theHeader.scss"
  scoped>
</style>

<template>
  <header role="banner">
    <b-container fluid class="header">
      <b-row no-gutters>
        <div class="col-12 col-md-10 col-lg-3 offset-0 offset-md-1 offset-xxl-2">
          <div class="header__brand">
            <h1>
              <nuxt-link
                :to="localePath('index')"
                :aria-label="logo.label"
                class="header__logo"
              >
                <img
                  :alt="logo.alt"
                  src="~assets/icons/ciafiligranes.svg"
                  class="header__image"
                >
              </nuxt-link>
            </h1>
            <TheBurger
              @toggle="$emit('sidenavToggle')"
            />
          </div>
        </div>
        <div class="col-12 col-lg-7 col-xxl-5">
          <TheNavbar
            :menu="menu"
          />
        </div>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import TheBurger from './components/TheBurger'
import TheNavbar from './components/TheNavbar'

export default {
  name: 'TheHeader',

  components: {
    TheBurger,
    TheNavbar
  },

  props: {
    logo: {
      type: Object,
      default: () => {}
    },

    menu: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
