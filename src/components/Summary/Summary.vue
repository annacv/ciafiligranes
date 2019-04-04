<style
  lang="scss"
  src="./summary.scss"
  scoped
>
</style>

<template>
  <b-container fluid class="summary">
    <b-row no-gutters>
      <div class="col-12 col-md-10 col-lg-10 col-xl-10 col-xxl-8 col-xxxl-8 offset-0 offset-md-1 offset-xxl-2">
        <b-row no-gutters>
          <div class="col-12 col-md-7 col-lg-8 col-xl-7 col-xxl-7 col-xxxl-7">
            <p
              class="summary__abstract"
              v-text="abstract"
            />
          </div>
          <div class="col-12 col-md-5 col-lg-3 col-xl-4 col-xxl-4 col-xxxl-4 offset-lg-1">
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
              <Button
                :button="$t('summary.button')"
              />
            </div>
          </div>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import Button from '../Button/Button'

export default {
  name: 'Summary',

  components: {
    Button
  },

  props: {
    abstract: {
      type: String,
      default: ''
    },

    items: {
      type: Array,
      required: true
    }
  }
}
</script>
