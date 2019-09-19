<style
  lang="scss"
  src="./filipartners.scss"
  scoped
  >
</style>

<template>
  <b-container fluid class="filipartners">
    <b-row no-gutters align-h="center">
      <div class= "col-12 offset-xl-1 offset-xxl-2">
        <h2 
          class="filipartners__heading"
          v-text="heading"
        />
      </div>
    </b-row>
    <b-row 
      no-gutters 
      align-h="center" 
      align-v="center"
    >
      <div class= "col-12 col-xl-3 col-xxxl-2 offset-0 offset-xl-1 offset-xxl-2">
        <ul class="filipartners__list">
          <li
            v-for="item in partnersicons"
            :key="item.alt"
            class="filipartners__list-item"
          >
            <PartnersIcons
              :alt="item.alt"
              :image="item.image"
              :link="item.link"
            />
          </li>
        </ul>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import PartnersIcons from '../Filipartners/PartnersIcons'

export default {
  name: 'Filipartners',

  components: {
    PartnersIcons
  },

  props: {
    heading: {
      type: String,
      default: ''
    },

    partnersicons: {
      type: Array,
      default: () => []
    }
  }
}
</script>
