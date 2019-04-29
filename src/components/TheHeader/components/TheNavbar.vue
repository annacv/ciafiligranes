<style
  lang="scss"
  src="../theHeader.scss"
  scoped
>
</style>

<template>
  <div class= "header__navbar">
    <nav
      class="navbar__main"
      role="navigation"
      aria-label="main navigation">
        <div class="grid-col-12">
        </div>
        <LanguageSelector
          :selectlang="$t('header.selectlang')"
          :selectname="$t('header.selectname')"
        />
    </nav>
  </div>
</template>

<script>
import LanguageSelector from '../components/LanguageSelector'

export default {
  name: 'TheNavbar',

  components: {
    LanguageSelector
  }
}
</script>
