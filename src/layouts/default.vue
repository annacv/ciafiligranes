<template>
  <div>
    <TheHeader/>
    <section class="main-content">
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader/TheHeader'
import TheFooter from '../components/TheFooter/TheFooter'

export default {
  name: 'Default',

  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
body {
  position: relative;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

*:focus {
  outline: 2px auto #f6b1bd;
}
</style>
