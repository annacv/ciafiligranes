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
      <div
        v-if="button.slot.alt"
        :aria-label="button.slot.alt"
        :class="button.slot.class"
        role="img"
      />
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
