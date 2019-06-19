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
      <div @click="$emit('close')">
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
import TheBurger from './TheBurger'
import LanguageSelector from './LanguageSelector'
import TheNavbar from './TheNavbar'

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
    LanguageSelector,
    TheNavbar
  }
}
</script>
