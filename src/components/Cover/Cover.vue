<style
  lang="scss"
  src="./cover.scss">
</style>

<template>
  <b-container fluid class="cover">
    <b-row class="cover__content">
      <div class="col-12 col-lg-7 col-xl-6 col-xxl-4 offset-lg-1 offset-xxl-2">
        <p
          v-if="content.claim"
          class="cover__claim"
          v-text="content.claim"
        />
      </div>
      <b-row class="row__title">
        <div class="col-11 col-lg-7 col-xl-6 col-xxl-4 col-xxxl-3 offset-lg-1 offset-xxl-2">
          <h2
            class="cover__title"
            v-text="content.title"
          />
        </div>
      </b-row>
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
