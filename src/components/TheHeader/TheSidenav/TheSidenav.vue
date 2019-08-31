<style
  lang="scss"
  src="./theSidenav.scss"
>
</style>

<template>
<div class="sidenav__container">
  <div
    v-if="show"
    class="sidenav__backdrop"
    @click="$emit('close')"></div>
  <transition name="slide-side">
    <div
      v-if="show"
      class="sidenav">
      <div class="sidenav__header">
        <div
          class="burger-container"
          @click="$emit('close')"
        >
          <TheBurger
            class="burger-close"
          />
        </div>
        <LanguageSelector
          :selectlang="$t('header.selectlang')"
          :selectname="$t('header.selectname')"
        />
      </div>
      <div @click="$emit('close')">
        <h1>
          <nuxt-link
            :to="localePath('index')"
            :aria-label="logo.label"
            class="navbar__logo navbar__menu-item"
          >
            <img
              :alt="logo.alt"
              src="~assets/icons/filicor.svg"
              class="navbar__image"
              @click="$emit('close')"
            >
            <p
              v-text="logo.filicor"
            />
          </nuxt-link>
        </h1>
        <TheNavbar
          :menu="menu"
          @click="$emit('close')"
        />
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import TheBurger from '../TheBurger/TheBurger'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import TheNavbar from '../TheNavbar/TheNavbar'

export default {
  name: 'TheSidenav',

  props: {
    show: {
      type: Boolean,
      default: false
    },

    menu: {
      type: Object,
      default: () => {}
    },

    logo: {
      type: Object,
      default: () => {}
    }
  },

  components: {
    TheBurger,
    LanguageSelector,
    TheNavbar
  }
}
</script>
