<style
  lang="scss"
  src="./brandedList.scss"
  scoped
  >
</style>

<template>
  <b-container fluid class="branded-list">
    <b-row no-gutters align-v="center">
      <div class= "col-12 branded-list-icons">
        <ul class="branded-list__list">
          <li
            v-for="item in brandedicons"
            :key="item.alt"
            class="col-12 col-md-4 branded-list__list-item"
          >
            <BrandedIcons
              :alt="item.alt"
              :image="item.image"
              :links="item.links"
            />
          </li>
        </ul>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import BrandedIcons from '../BrandedList/BrandedIcons'

export default {
  name: 'BrandedList',

  components: {
    BrandedIcons
  },

  props: {
    brandedicons: {
      type: Array,
      default: () => []
    }
  }
}
</script>
