<style
  lang="scss"
  src="./brandedList.scss"
  scoped
  >
</style>

<template>
  <div class="branded-list-icon">
    <a
      :aria-label="image.aria"
      :href="image.link"
      target="__blank"
      class="branded-list-icon__image"
    >
      <img
        :src="require(`~/assets${image.image}`)"
        :alt="image.alt"
        :aria-label="image.alt"
        class="branded-list-icon__image"
      >
    </a>
    <div
      v-for="item in links"
      :key="item.link"
      class="branded-list-icon__info"
    >
      <a
        :aria-label="item.aria"
        :href="item.link"
        target="__blank"
        class="branded-list-icon__link"
        v-text="item.text"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandedIcons',

  props: {
    image: {
      type: Object,
      default: () => {}
    },

    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
