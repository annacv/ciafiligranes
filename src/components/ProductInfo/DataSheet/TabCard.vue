<template>
  <div class="data-sheet__tab-card">
    <ul class="data-sheet__tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :aria-controls="activeTab === tab ? tabPanelSlotName : null"
        :aria-selected="activeTab === tab ? true : false"
        :class="activeTab === tab ? 'tab--active': 'tab'"
        role="tab"
        @click="switchTab(tab)"
      >
        <slot :name="tabHeadSlotName(tab)">{{ tab }}</slot>
      </li>
    </ul>
    <div
      :id="tabPanelSlotName"
      role="tabpanel"
    >
      <slot :name="tabPanelSlotName"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabCard',
  props: {
    initialTab: {
      type: String,
      default: '1'
    },
    tabs: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    activeTab: ''
  }),

  mounted() {
    this.activeTab = this.initialTab
  },

  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`
    }
  },

  methods: {
    tabHeadSlotName(tab) {
      return `tab-head-${tab}`
    },

    switchTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>
