<style
  lang="scss"
  src="./summary.scss" scoped>
</style>

<template>
  <b-container fluid class="summary">
    <b-row class="justify-content-center">
      <div class="col-12 col-sm-10 col-lg-10 col-xl-9 col-xxl-7 col-xxxl-6">
        <b-row class="justify-content-center">
          <b-col md="8" lg="8" xl="7">
            <p
              class="summary__abstract"
              v-text="abstract"
            />
          </b-col>
          <b-col md="4" lg="4" xl="5">
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
            <!--b-button block>Dossier</b-button-->
          </b-col>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Summary',

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
