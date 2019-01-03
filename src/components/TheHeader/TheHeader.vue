<!--style lang="scss" src="./TheHeader.scss" scoped></style-->

<template>
  <header>
    <div class="header__actions">
      <TheNavbar/>
    </div>
  </header>
</template>

<script>
import TheNavbar from './components/TheNavbar/TheNavbar'

export default {
  name: 'TheHeader',

  components: {
    TheNavbar
  }
}
</script>
