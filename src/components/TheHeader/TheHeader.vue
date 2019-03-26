<style
  lang="scss"
  src="./theHeader.scss"
  scoped>
</style>

<template>
  <header role="banner">
    <b-container fluid class="header">
      <b-row no-gutters>
        <div class="col-8 col-md-4">
          <!--TheBurger/-->
          <div class="header__brand">
            <h1>
              <nuxt-link
                :to="localePath('index')"
                aria-label="Cia.Filigranes logo"
                class="header__logo"
              >
                <img
                  alt="Cia.Filigranes logo"
                  src="~assets/icons/ciafiligranes.svg"
                  class="header__image"
                >
              </nuxt-link>
            </h1>
          </div>
        </div>
        <div class="col-4 col-md-8">
          <TheNavbar/>
        </div>
      </b-row>
    </b-container>
  </header>
</template>

<script>
//import TheBurger from './components/TheBurger/TheBurger'
import TheNavbar from './components/TheNavbar'

export default {
  name: 'TheHeader',

  components: {
    //TheBurger,
    TheNavbar
  }
}
</script>
