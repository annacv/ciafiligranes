<style
  lang="scss"
  src="./dataSheet.scss"
>
</style>

<template>
  <b-container fluid class="data-sheet">
    <b-row no-gutters>
      <div class="col-12 col-xl-10 col-xxl-8 offset-xl-1 offset-xxl-2">
        <b-row no-gutters class="data-sheet__row">
          <div class="col-12 col-lg-8">
            <YTEmbed v-if="videoId" :video-id="videoId"/>
          </div>
          <div class="col-12 col-lg-4 col-xl-4">
            <TabCard
              :tabs="tabs"
              :initial-tab="initialTab"
            >
              <template slot="tab-head-1">
                <h5
                  class="data-sheet__title"
                  v-text="titles.title1"
                />
              </template>
              <template slot="tab-panel-1">
                <ul
                  class="data-sheet__list left-side"
                >
                  <li
                    v-for="item in sheet1"
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
              <template slot="tab-head-2">
                <h5
                  class="data-sheet__title"
                  v-text="titles.title2"
                />
              </template>
              <template slot="tab-panel-2">
                <ul
                  class="data-sheet__list right-side"
                >
                  <li
                    v-for="item in sheet2"
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
        </b-row>
      </div>
    </b-row>
    <b-row v-if="buttons" no-gutters>
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
import YTEmbed from '@/components/DataSheet/YTEmbed'
import FiliButton from '~/components/FiliButton/FiliButton'
import TabCard from '@/components/DataSheet/TabCard'

export default {
  name: 'DataSheet',

  components: {
    YTEmbed,
    FiliButton,
    TabCard
  },

  data: () => ({
    initialTab: '1',
    tabs: ['1', '2']
  }),

  props: {
    videoId: {
      type: String,
      default: ''
    },
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
  },

  methods: {
    setSelected(tab) {
      this.selected = tab
    }
  }
}
</script>
