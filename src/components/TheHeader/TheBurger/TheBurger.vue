<style
  lang="scss"
  src="./theBurger.scss"
  scoped>
</style>

<template>
  <div class="burger">
    <div
      :aria-label="$t('header.burger.label')"
      class="burger__toggle"
      role="button"
      @click="toggle()">
      <div class="burger__bar burger__bar--1"></div>
      <div class="burger__bar burger__bar--2"></div>
      <div class="burger__bar burger__bar--3"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TheBurger',

  methods: {
    ...mapMutations({ toggle: 'sidenav/toggle' })
  }
}
</script>
