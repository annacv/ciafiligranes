<style
  lang="scss"
  src="./cover.scss">
</style>

<template>
  <div class="cover__container">
    <div class="cover__content">
      <p
        class="cover__claim"
        v-text="content.claim"
      />
      <h2
        class="cover__title"
        v-text="content.title"
      />
    </div>
  </div>
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
