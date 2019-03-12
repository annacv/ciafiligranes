<style
  lang="scss"
  src="../assets/scss/layout.scss"
  scoped
>
</style>

<template>
  <div>
    <TheHeader/>
    <section class="main-content">
      <nuxt/>
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
