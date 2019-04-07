<style
  lang="scss"
  src="./synopsis.scss"
  scoped
  >
</style>

<template>
  <section class="main-content">
    <b-container fluid class="synopsis__heading">
      <b-row no-gutters>
        <div class="col-12 col-md-10 col-lg-10 col-xl-10 col-xxl-8 col-xxxl-6 offset-0 offset-md-1 offset-xxl-2">
          <h3
            class="synopsis__title"
            v-text="title"
          />
        </div>
      </b-row>
    </b-container>
    <b-container fluid class="synopsis__content">
      <b-row no-gutters align-v         ="center">
        <div class="col-12 col-md-10 col-lg-4 col-xl-3 col-xxl-3 offset-0 offset-md-1 offset-xxl-2">
          <p
            v-for="item in paragraphs"
            :key="item.paragraph"
            class="synopsis__paragraph"
            v-text="item.paragraph"
          />
        </div>
        <div class="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-6 col-xxxl-6 offset-0 offset-xl-1 offset-xxl-1 offset-xxxl-1">
          <b-row>
            <div class="synopsis__image-container">
              <img
                :alt="alt"
                src="~/assets/images/img_sinopsi_plisplas.jpg"
                srcset="~/assets/images/img_sinopsi_plisplas.jpg 1000w, ~/assets/images/img_sinopsi_plisplas.png 3000w,"
                class="synopsis__image"
              >
            </div>
          </b-row>
        </div>
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
    },

    alt: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    }
  }
}
</script>
