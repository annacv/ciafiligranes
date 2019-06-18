<style
  lang="scss"
  src="./productList.scss"
  scoped
  >
</style>

<template>
  <div class="product-list">
    <div
      v-for="item in items"
      :key="item.title"
    >
      <Synopsis
        :title="item.title"
        :image="item.image"
        :paragraphs="item.paragraphs"
        :buttons="item.buttons"
        class="product-list__item"
      />
    </div>
  </div>
</template>

<script>
import Synopsis from '~/components/Synopsis/Synopsis'
export default {
  name: 'ProductList',

  components: {
    Synopsis
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
