<style
  lang="scss"
  src="./summary.scss"
  scoped
>
</style>

<template>
  <b-container fluid class="summary">
    <b-row no-gutters>
      <div class="col-12 col-lg-10 col-xxl-8 offset-lg-1 offset-xxl-2">
        <b-row no-gutters>
          <div class="col-12 col-md-7">
            <p
              class="summary__abstract"
              v-text="abstract"
            />
          </div>
          <div class="col-12 col-md-5 col-xl-4 offset-xl-1">
            <ul
              v-for="item in items"
              :key="item.title"
              class="summary__list"
            >
              <li class="summary__list-item">
                <p
                  class="summary__item--bold"
                  v-text="item.title"
                />
                <p
                  class="summary__item--light"
                  v-text="item.description"
                />
              </li>
            </ul>
            <div class="summary__btn">
              <FiliButton
                :button="button"
              />
            </div>
          </div>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import FiliButton from '../FiliButton/FiliButton'

export default {
  name: 'Summary',

  components: {
    FiliButton
  },

  props: {
    abstract: {
      type: String,
      default: ''
    },

    items: {
      type: Array,
      required: true
    },

    button: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
