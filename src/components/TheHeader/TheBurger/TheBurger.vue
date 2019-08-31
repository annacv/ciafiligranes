<style
  lang="scss"
  src="./theBurger.scss"
  scoped>
</style>

<template>
  <div class="burger">
    <div
      class="burger__toggle"
      role="button"
      @click="$emit('toggle')">
      <div class="burger__bar burger__bar--1"></div>
      <div class="burger__bar burger__bar--2"></div>
      <div class="burger__bar burger__bar--3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBurger'
}
</script>
