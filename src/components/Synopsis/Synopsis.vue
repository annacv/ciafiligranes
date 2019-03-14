<style
  lang="scss"
  src="./synopsis.scss"
  scoped>
</style>

<template>
  <section class="main-content">
    <b-container fluid class="synopsis__heading">
      <b-row no-gutters>
        <div class="col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-8 col-xxxl-6 offset-1 offset-xxl-2">
          <h3
            class="synopsis__title"
            v-text="title"
          />
        </div>
      </b-row>
    </b-container>
    <b-container fluid class="synopsis__content">
      <b-row no-gutters align-h="between">
        <div class="col-3 col-xxl-2 offset-1 offset-xxl-2">
          <p
            v-for="item in paragraphs"
            :key="item.paragraph"
            class="synopsis__paragraph"
            v-text="item.paragraph"
          />
        </div>
        <b-col cols="2" align-self="end" class="col-xxl-5">
          <div class="synopsis__btn">
            <b-button variant="outline-primary">Galeria</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Synopsis',

  props: {
    title: {
      type: String,
      default: ''
    },

    paragraphs: {
      type: Array,
      required: true
    }
  }
}
</script>
