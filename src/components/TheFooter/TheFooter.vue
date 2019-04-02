<!--style lang="scss" src="./theFooter.scss" scoped></style-->

<template>
  <footer role="contentinfo">
    <b-container fluid class="footer__corp">
      <b-row no-gutters>
        <div class="col-3">
          Social Icons
        </div>
        <div class="col-6">
          corp contact
        </div>
        <div class="col-3">
          <img
            alt="Cia.Filigranes logo"
            src="~assets/icons/ciafiligranes.svg"
            class="footer__image"
          >
        </div>
      </b-row>
    </b-container>
    <b-container fluid class="footer__credits">
      <b-row no-gutters align-h="start">
        <div class="col-12">
          <p
            class="credits__text"
            v-text="credits"
          />
        </div>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  props: {
    credits: {
      type: String,
      default: ''
    }
  }
}
</script>
