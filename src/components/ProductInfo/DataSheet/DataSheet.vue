<style
  lang="scss"
  src="@/components/ProductInfo/DataSheet/dataSheet.scss"
>
</style>

<template>
  <div class="data-sheet">
    <TabCard
      :tabs="tabs"
      :initial-tab="initialTab"
    >
      <template
        v-for="(tab, index) in sheets"
        :slot="`tab-head-${index + 1}`"
      >
        <h5
          :key="index"
          class="data-sheet__title"
        >
          {{ tab.title }}
        </h5>
      </template>
      <template
        v-for="(sheet, index) in sheets"
        :slot="`tab-panel-${index + 1}`"
      >
        <ul :class="`data-sheet__list ${sheet.class}`" :key="index">
          <li
            v-for="item in sheet.items"
            :key="item.label"
            class="data-sheet__list-item"
          >
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
      </template>
    </TabCard>
  </div>
</template>

<script>
import TabCard from '@/components/ProductInfo/DataSheet/TabCard'

export default {
  name: 'DataSheet',

  components: {
    TabCard
  },

  data: () => ({
    initialTab: '1',
    tabs: ['1', '2']
  }),

  props: {
    sheets: {
      type: Array,
      default: () => []
    }
  }
}
</script>
