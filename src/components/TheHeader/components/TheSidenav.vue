<style
  lang="scss"
  src="../theHeader.scss"
  scoped
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
      <ul
        class="navbar__menu-list"
        @click="$emit('close')"
      >
        <li class="navbar__menu-item">
          <nuxt-link
            :aria-label="menu.shows.aria"
            :to="localePath('espectacles', $i18n.locale)"
            class="navbar__menu-links"
            v-text="menu.shows.text"
          />
        </li>
        <li class="navbar__menu-item">
          <nuxt-link
            :aria-label="menu.workshops.aria"
            :to="localePath('tallers', $i18n.locale)"
            class="navbar__menu-links"
            v-text="menu.workshops.text"
          />
        </li>
      </ul>
    </div>
  </transition>
</div>
</template>

<script>
import TheBurger from './TheBurger'
import LanguageSelector from './LanguageSelector'

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
    }
  },

  components: {
    TheBurger,
    LanguageSelector
  }
}
</script>
