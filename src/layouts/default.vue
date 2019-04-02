<style
  lang="scss"
  src="../assets/scss/layout.scss"
>
</style>

<template>
  <div>
    <TheHeader
    :logo="$t('header.logo')"
    />
      <nuxt/>
    <TheFooter :credits="$t('footer.credits')"/>
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
