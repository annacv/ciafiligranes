<!--style lang="scss" src="./Contact.scss" scoped></style-->

<template>
  <div class="container__contact">
    <h3
      class="contact__title"
      v-text="title"
    />
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
