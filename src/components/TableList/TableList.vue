<style
  lang="scss"
  src="./tableList.scss"
  scoped
>
</style>

<template>
  <b-container fluid class="table-list">
    <b-row no-gutters class="table__container">
      <div class="col-12 col-lg-10 col-xxl-8 offset-lg-1 offset-xxl-2">
        <h2
          class="table__title"
          v-text="table.title"
        />
        <p
          class="table__description"
          v-text="table.description"
        />
        <table class="table__table">
          <thead class="table__head">
            <th
              v-for="item in headfields"
              :key="item.heading"
              class="table__heading"
              v-text="item.heading"
            />
          </thead>
          <tbody class="table__content">
            <tr
              v-for="items in contentfields"
              :key="items"
              class="table__row"
            >
              <td
                v-for="item in items"
                :key="item"
                class="table__cell"
                v-text="item"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Table',

  props: {
    table: {
      type: Object,
      default: () => {}
    },
    headfields: {
      type: Array,
      required: true,
      default: () => []
    },
    contentfields: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
