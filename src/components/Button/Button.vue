<style
  lang="scss"
  src="./button.scss"
  scoped
>
</style>

<template>
  <a
    :class="button.class"
    :type="button.type"
    :href="button.href"
    role="button"
    download="CiaFiligranes-PlisPlas_dossier-ca.pdf"
    target="__blank"
  >
    <slot>
      {{ button.text }}
      <img
        v-if="button.slot.alt"
        :alt="button.slot.alt"
        :src="require(`~/assets/icons/${button.slot.class}.svg`)"
        :class="button.slot.class"
      >
    </slot>
  </a>
</template>

<script>
export default {
  name: 'Button',

  props: {
    button: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
