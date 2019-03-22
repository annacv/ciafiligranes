<style
  lang="scss"
  src="./cover.scss">
</style>

<template>
  <b-container fluid class="cover">
    <b-row class="cover__content">
      <div class="col-12 col-sm-8 col-md-7 col-lg-6 col-xl-6 col-xxl-4 col-xxxl-4 offset-0 offset-md-1 offset-xxl-2">
        <p
          class="cover__claim"
          v-text="content.claim"
        />
        <h2
          class="cover__title"
          v-text="content.title"
        />
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Cover',

  props: {
    content: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
