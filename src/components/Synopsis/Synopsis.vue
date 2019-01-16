<!--style lang="scss" src="./InScene.scss" scoped></style-->

<template>
  <div class="container__synopsis">
    <h3
      class="section__title"
      v-text="title"
    />
    <div class="synopsis__text-container">
      <div class="synopsis__paragraphs">
        <p
          v-for="item in paragraphs"
          :key="item.paragraph"
          v-text="item.paragraph"
        />
      </div>
      <div
        class="synopsis__image-container"
      >
        <img
          :src="src"
        >
      </div>
    </div>
  </div>
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

    src: {
      type: String,
      default: ''
    }
  }
}
</script>
