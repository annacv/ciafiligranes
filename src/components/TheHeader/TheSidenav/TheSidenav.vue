<style
  lang="scss"
  src="./theSidenav.scss"
>
</style>

<template>
<div class="sidenav__container">
  <div
    v-if="sidenav"
    class="sidenav__backdrop"
    @click="close()"
  />
  <transition name="slide-side">
    <div
      v-if="sidenav"
      class="sidenav"
    >
      <div class="sidenav__header">
        <LanguageSelector
          :selectlang="$t('header.selectlang')"
          :selectname="$t('header.selectname')"
        />
        <div class="burger-container">
          <TheBurger
            :aria-label="$t('header.burger.close')"
            class="burger-close"
            @toggle="close()"
          />
        </div>
      </div>
      <div @click="close()">
        <TheNavbar
          :menu="menu"
        />
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import TheBurger from '../TheBurger/TheBurger'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import TheNavbar from '../TheNavbar/TheNavbar'

export default {
  name: 'TheSidenav',

  components: {
    TheBurger,
    LanguageSelector,
    TheNavbar
  },

  props: {
    menu: {
      type: Array,
      default: () => []
    },

    logo: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    ...mapGetters({ sidenav: 'sidenav/getSidenavState' })
  },

  methods: {
    ...mapMutations({ close: 'sidenav/toggle' })
  }
}
</script>
