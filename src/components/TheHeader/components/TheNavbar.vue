<style
  lang="scss"
  src="../theHeader.scss"
  scoped
>
</style>

<template>
  <div class= "header__navbar">
    <nav
      class="navbar__main"
      role="navigation"
      aria-label="main navigation">
        <div class="col-12">
          <ul class="navbar__menu-list">
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
        <LanguageSelector
          :selectlang="$t('header.selectlang')"
          :selectname="$t('header.selectname')"
        />
    </nav>
  </div>
</template>

<script>
import LanguageSelector from '../components/LanguageSelector'

export default {
  name: 'TheNavbar',

  components: {
    LanguageSelector
  },

  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
