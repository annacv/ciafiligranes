<!--style lang="scss" src="./TheNavbar.scss" scoped></style-->

<template>
  <div class= "container__navbar">
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/">
          <img
            src="~assets/icons/ciafiligranes.svg"
            alt="ciafiligranes"
            height="64">
        </a>
        <div class="grid-col-12">
          <ul class="menu-list">
            <li
              v-for="(item, key) of items"
              :key="key"
              class="menu-list__item">
              <nuxt-link
                :to="item.to"
                exact-active-class="is-active">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <LanguageSelector/>
      </div>
      <TheBurger/>
    </nav>
  </div>
</template>

<script>
import TheBurger from '../../components/TheBurger/TheBurger'
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector'

export default {
  name: 'TheNavbar',

  components: {
    TheBurger,
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

<style lang="scss">
.navbar-brand {
  align-items: center;
}

img {
  position: absolute;
  z-index: 1;
}

.menu-list {
  display: flex;

  &__item {
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>
