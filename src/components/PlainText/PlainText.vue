<style
  lang="scss"
  src="./plainText.scss"
  scoped
>
</style>

<template>
  <b-container fluid class="plain-text">
    <b-row no-gutters>
      <div class="col-12 col-lg-10 col-xxl-8 offset-lg-1 offset-xxl-2">
        <b-row no-gutters>
          <div
            v-for="item in items"
            :key="item.paragraph"
            class="plain-text__content"
          >
            <h2
              v-if="item.title"
              class="plain-text__title"
              v-text="item.title"
            />
            <p
              class="plain-text__paragraph"
              v-text="item.paragraph"
            />
          </div>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PlainText',

  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
