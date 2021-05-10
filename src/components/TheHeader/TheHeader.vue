<style
  lang="scss"
  src="./theHeader.scss"
>
</style>

<template>
  <header role="banner">
    <b-container fluid class="header">
      <b-row no-gutters>
        <div class="col-12 col-lg-2 offset-xl-1 offset-xxl-2">
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
              :aria-label="$t('header.burger.open')"
              @toggle="sidenavToggle()"
            />
          </div>
        </div>
        <div class="col-12 col-lg-9 col-xl-7 col-xxl-5 offset-lg-1">
          <div class="header__navbar">
            <nav
              class="navbar__main"
              role="navigation"
              aria-label="main navigation">
              <TheNavbar
                :menu="menu"
              />
              <LanguageSelector
                :selectlang="$t('header.selectlang')"
                :selectname="$t('header.selectname')"
              />
            </nav>
          </div>
        </div>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

import TheBurger from './TheBurger/TheBurger'
import LanguageSelector from './LanguageSelector/LanguageSelector'
import TheNavbar from './TheNavbar/TheNavbar'

export default {
  name: 'TheHeader',

  components: {
    TheBurger,
    LanguageSelector,
    TheNavbar
  },

  props: {
    logo: {
      type: Object,
      default: () => {}
    },

    menu: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    ...mapMutations({ sidenavToggle: 'sidenav/toggle' })
  }
}
</script>
