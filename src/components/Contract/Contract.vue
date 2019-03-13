<style
  lang="scss"
  src="./contract.scss"
  scoped>
</style>

<template>
  <b-container fluid class="contract">
    <b-row no-gutters>
      <div class="col-12 col-sm-10 col-lg-10 col-xl-10 col-xxl-8 col-xxxl-6 offset-1 offset-xxl-2">
        <b-row no-gutters>
        <h4
          class="contract__title"
          v-text="title"
        />
        <div
          v-for="item in items"
          :key="item.label"
          class="contract__ways"
        >
          <p
            id="item-link"
            class="contract__label"
            v-text="item.text"
          />
          <a
            :aria-label="item.arialabel"
            :href="item.href"
            aria-describedby="item-link"
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
