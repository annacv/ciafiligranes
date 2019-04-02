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
        <div class="grid-col-12">
          <ul>
            <li
              v-for="(item, key) of items"
              :key="key"
              class="navbar__menu-item">
              <nuxt-link
                :to="item.to"
                exact-active-class="is-active">
                {{ item.title }}
              </nuxt-link>
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

  data() {
    return {
      items: [
        {
          title: 'Contactar',
          to: { name: 'contactar' }
        }
      ]
    }
  }
}
</script>
