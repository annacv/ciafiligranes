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
    <CookieControl
      :text="$t('cookies.text')"
    />
  </div>
</template>

<script>
import CookieControl from '../components/CookieControl/CookieControl'
import TheHeader from '../components/TheHeader/TheHeader'
import TheFooter from '../components/TheFooter/TheFooter'
import TheSidenav from '../components/TheHeader/components/TheSidenav'

export default {
  name: 'Default',

  components: {
    CookieControl,
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
