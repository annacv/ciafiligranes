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
    <Cookies
      :cookie-accepted="cookieAccepted"
      :cookie-name="cookieName"
      :desc="$t('cookies.desc')"
      :link="$t('cookies.link')"
      :text="$t('cookies.text')"
      @accepted-cookie="onAcceptedCookie"
    />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader/TheHeader'
import TheFooter from '../components/TheFooter/TheFooter'
import TheSidenav from '../components/TheHeader/TheSidenav/TheSidenav'
import Cookies from '../components/Cookies/Cookies'

const REGEX = '=([^;]+)'

export default {
  name: 'Default',

  components: {
    Cookies,
    TheHeader,
    TheFooter,
    TheSidenav
  },

  mounted() {
    this.cookieAccepted = this.isCookieAccepted()
  },

  data() {
    return {
      displaySidenav: false,
      cookieAccepted: undefined,
      cookieName: 'cookie-policy-consent-accepted'
    }
  },

  methods: {
    isCookieAccepted() {
      const match = document.cookie.match(
        new RegExp(`${this.cookieName}${REGEX}`)
      )
      return !!match
    },

    onAcceptedCookie() {
      this.cookieAccepted = true
    }
  }
}
</script>
