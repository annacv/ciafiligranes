<style
  lang="scss"
  src="./cover.scss">
</style>

<template>
  <b-container fluid class="cover__container">
    <b-row no-gutters class="cover__content">
      <p
        class="cover__claim"
        v-text="content.claim"
      />
      <h2
        class="cover__title"
        v-text="content.title"
      />
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
