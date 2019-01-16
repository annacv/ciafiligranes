<!--style lang="scss" src="./InScene.scss" scoped></style-->

<template>
  <div class="container__summary">
    <p
      class="summary__abstract"
      v-text="abstract"
    />
    <ul
      v-for="item in items"
      :key="item.title"
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
  </div>
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
