<style
  lang="scss"
  src="./highlights.scss"
  scoped>
</style>

<template>
  <b-container fluid class="highlights">
    <b-row no-gutters>
      <div class="col-12 col-xl-10 col-xxl-8 offset-0 offset-xl-1 offset-xxl-2">
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
            class="col-12 col-sm-6 col-lg-4">
            <Card
              :image="item.image"
              :alt="item.alt"
              :link="item.link"
              :title="item.title"
              :name="item.name"
            />
          </div>
        </b-row>
        <b-row no-gutters>
          <FiliButton
            v-if="button"
            :button="button"
          />
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import Card from './Card/Card'
import FiliButton from '~/components/FiliButton/FiliButton'

export default {
  name: 'Highlights',

  components: {
    Card,
    FiliButton
  },

  props: {
    content: {
      type: Object,
      required: true,
      default: () => {}
    },

    highlighted: {
      type: Array,
      default: () => []
    },

    button: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
