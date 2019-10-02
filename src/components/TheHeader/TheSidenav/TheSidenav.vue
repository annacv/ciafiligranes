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
        <LanguageSelector
          :selectlang="$t('header.selectlang')"
          :selectname="$t('header.selectname')"
        />
        <div
          class="burger-container"
          @click="$emit('close')"
        >
          <TheBurger
            :aria-label="$t('header.burger.close')"
            class="burger-close"
          />
        </div>
      </div>
      <div @click="$emit('close')">
        <p class='navbar__menu-item'>
          <nuxt-link
            :to="localePath('index')"
            :aria-label="logo.label"
            @click="$emit('close')"
            v-text="logo.filicor"
          >
          </nuxt-link>
        </p>
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
