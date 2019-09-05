<style
  lang="scss"
  src="./dataSheet.scss"
  scoped
>
</style>

<template>
  <b-container fluid class="data-sheet">
    <b-row no-gutters>
      <div class="col-12 col-xl-10 col-xxl-8 offset-xl-1 offset-xxl-2">
        <b-row class="data-sheet__row">
          <div class="col col-12 col-md-6">
            <div class="data-sheet__container">
              <h3
                class="data-sheet__title"
                v-text="titles.title1"
              />
              <ul
                class="data-sheet__list left-side"
              >
                <li
                v-for="item in sheet1"
                :key="item.label"
                class="data-sheet__list-item">
                  <p
                    v-if="item.label"
                    class="data-sheet__item--bold"
                    v-text="item.label"
                  />
                  <p
                    v-if="item.description"
                    class="data-sheet__item--light"
                    v-text="item.description"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="col col-12 col-md-6">
            <div class="data-sheet__container">
              <h3
                class="data-sheet__title"
                v-text="titles.title2"
              />
              <ul
                class="data-sheet__list right-side"
              >
                <li
                  v-for="item in sheet2"
                  :key="item.label"
                  class="data-sheet__list-item"
                >
                  <p
                    class="data-sheet__item--bold"
                    v-text="item.label"
                  />
                  <p
                    v-if="item.description"
                    class="data-sheet__item--light"
                    v-text="item.description"
                  />
                </li>
              </ul>
            </div>
          </div>
        </b-row>
      </div>
    </b-row>
    <b-row no-gutters>
      <div class="col-12 col-xl-10 col-xxl-8 offset-xl-1 offset-xxl-2">
        <b-row
          v-for="button in buttons"
          :key="button.class"
          no-gutters
          class="data-sheet__btn"
        >
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
import FiliButton from '~/components/FiliButton/FiliButton'

export default {
  name: 'DataSheet',

  components: {
    FiliButton
  },

  props: {
    titles: {
      type: Object,
      default: () => {},
      required: true
    },

    sheet1: {
      type: Array,
      default: () => [],
      required: true
    },

    sheet2: {
      type: Array,
      default: () => [],
      required: true
    },

    buttons: {
      type: Array,
      default: () => []
    }
  }
}
</script>
