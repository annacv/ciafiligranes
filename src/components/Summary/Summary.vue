<style
  lang="scss"
  src="./summary.scss" scoped>
</style>

<template>
  <b-container class="summary">
    <b-row>
      <b-col cols="md-7">
        <p
          class="summary__abstract"
          v-text="abstract"
        />
      </b-col>
      <b-col cols="md-5">
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
