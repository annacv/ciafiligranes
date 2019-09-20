<style
  lang="scss"
  src="./theNavbar.scss"
>
</style>

<template>
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
    <li class="navbar__menu-item">
      <nuxt-link
        :aria-label="menu.performances.aria"
        :to="localePath('animacions', $i18n.locale)"
        class="navbar__menu-links"
        v-text="menu.performances.text"
      />
    </li>
    <li class="navbar__menu-item">
      <nuxt-link
        :aria-label="menu.filipersones.aria"
        :to="localePath('filipersones', $i18n.locale)"
        class="navbar__menu-links"
        v-text="menu.filipersones.text"
      />
    </li>
    <li class="navbar__menu-item">
      <nuxt-link
        :aria-label="menu.contacte.aria"
        :to="localePath('contacte', $i18n.locale)"
        class="navbar__menu-links"
        v-text="menu.contacte.text"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TheNavbar',

  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
