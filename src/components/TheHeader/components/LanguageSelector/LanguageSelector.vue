<!--style lang="scss" src="./LanguageSelector.scss" scoped></style-->

<template>
  <select class="language-selector">
    <option value="ca">CA</option>
    <option value="es">ES</option>
    <option value="en">EN</option>
  </select>
</template>

<script>
export default {
  name: 'LanguageSelector'
}
</script>

<style lang="scss">
select {
  background-color: white;
  height: 1.75rem;
  border: none;
  padding: 0.25rem;
}
</style>
