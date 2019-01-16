<!--style lang="scss" src="./WantContract.scss" scoped></style-->

<template>
  <div class="container__contract">
    <h4
      class="contract__title"
      v-text="title"
    />
    <div
      v-for="item in items"
      :key="item.label"
      class="container__contract-ways"
    >
      <p
        id="item-link"
        class="contract__email-label"
        v-text="item.text"
      />
      <a
        :aria-label="item.arialabel"
        :href="item.href"
        aria-describedby="item-link"
        target="_blank"
        v-text="item.link"
      />
    </div>
  </div>
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
