<style
  lang="scss"
  src="./Highlights.scss"
  scoped>
</style>

<template>
  <b-container fluid class="highlights">
    <b-row no-gutters>
      <div class="col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-8 col-xxxl-6 offset-1 offset-xxl-2">
        <h3
          class="highlights__title"
          v-text="content.title"
        />
        <p
          class="highlights__description"
          v-text="content.description"
        />

        <b-row class="highlights__items">
          <div
            v-for="item in highlighted"
            :key="item.name"
            class="col-6">
              <Card
                :image="item.image"
                :alt="item.alt"
                :link="item.link"
                :title="item.title"
                :text="item.name"
              />
          </div>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import Card from './Card/Card'

export default {
  name: 'Highlights',

  components: {
    Card
  },

  props: {
    content: {
      type: Object,
      required: true,
      default: () => {}
    },

    highlighted: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
