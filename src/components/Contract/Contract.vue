<style
  lang="scss"
  src="./contract.scss"
  scoped>
</style>

<template>
  <b-container fluid class="contract">
    <b-row no-gutters align-h="center">
      <div class="col-12 col-xl-10 col-xxl-8 col-xxxl-6">
        <b-row no-gutters align-h="center">
          <h4
            class="contract__title"
            v-text="title"
          />
          <div
            v-for="(item, index) in items"
            :key="item.label"
            class="contract__ways"
          >
            <p
              :id="'contract-link-'+`${index}`"
              class="contract__label"
              v-text="item.text"
            />
            <a
              :aria-label="item.arialabel"
              :href="item.href"
              :aria-describedby="'contract-link-'+`${index}`"
              class="contract__link"
              v-text="item.link"
            />
          </div>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Contract',

  props: {
    title: {
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
