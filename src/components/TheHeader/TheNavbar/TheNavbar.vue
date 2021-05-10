<style
  lang="scss"
  src="./theNavbar.scss"
>
</style>

<template>
  <ul class="navbar__menu-list" role="menu">
    <li
      v-for="(menuitem, index) in menu"
      :key="index"
      role="menuitem"
      class="navbar__menu-item"
      >
      <nuxt-link
        :aria-label="menuitem.ariaLabel"
        :name="menuitem.name"
        :to="localePath(`${menuitem.name}`, $i18n.locale)"
        :text="menuitem.text"
        class="navbar__menu-links"
      > {{ menuitem.text }}
      </nuxt-link>
    </li>    
  </ul>
</template>

<script>
export default {
  name: 'TheNavbar',

  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
}
</script>
