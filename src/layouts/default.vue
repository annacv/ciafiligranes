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
    <TheFooter
      :socialicons="$t('footer.socialicons')"
      :email="$t('footer.email')"
      :adress="$t('footer.adress')"
      :logo="$t('footer.logo')"
      :cia="$t('footer.cia')"
      :credits="$t('footer.credits')"
    />
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
