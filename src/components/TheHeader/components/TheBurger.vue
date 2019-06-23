<style
  lang="scss"
  src="../theHeader.scss"
  scoped>
</style>

<template>
  <div class="burger__menu">
    <div
      class="burger-toggle"
      role="button"
      @click="$emit('toggle')">
      <div class="burger__bar bar-1"></div>
      <div class="burger__bar bar-2"></div>
      <div class="burger__bar bar-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBurger'
}
</script>
