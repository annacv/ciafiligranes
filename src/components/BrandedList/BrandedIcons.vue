<style
  lang="scss"
  src="./brandedList.scss"
  scoped
  >
</style>

<template>
  <div class="branded-list-icons">
    <img
      :src="require(`~/assets${image}`)"
      :alt="alt"
      :aria-label="alt"
      class="branded-list-icons__image"
    >
    <div
      v-for="item in links"
      :key="item.link"
      class="branded-list-icons__info"
    >
      <a
        :aria-label="item.aria"
        :href="item.link"
        target="__blank"
        rel="nofollow noopener"
        class="branded-list-icons__link"
        v-text="item.text"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandedIcons',

  props: {
    alt: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    },

    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
