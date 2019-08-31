<style
  lang="scss"
  src="../assets/scss/layout.scss"
>
</style>

<template>
  <div>
    <TheHeader
      :logo="$t('header.logo')"
      :menu="$t('header.menu')"
      @sidenavToggle="displaySidenav =! displaySidenav"
    />
    <TheSidenav
      :logo="$t('header.logo')"
      :menu="$t('header.menu')"
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
      <nuxt/>
    <TheFooter
      :socialicons="$t('footer.socialicons')"
      :email="$t('footer.email')"
      :adress="$t('footer.adress')"
      :logo="$t('footer.logo')"
      :cia="$t('footer.cia')"
      :credits="$t('footer.credits')"
      :legal="$t('footer.legal')"
    />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader/TheHeader'
import TheFooter from '../components/TheFooter/TheFooter'
import TheSidenav from '../components/TheHeader/TheSidenav/TheSidenav'

export default {
  name: 'Default',

  components: {
    TheHeader,
    TheFooter,
    TheSidenav
  },

  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>
