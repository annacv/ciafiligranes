<style
  lang="scss"
  src="../theHeader.scss"
  scoped
>
</style>

<template>
  <div class="language-selector">
    <label
      aria-label="Select language"
      class="language-selector__label"
      for="select-lang"
    >
    </label>
    <select
      id="select-lang"
      v-model="selected"
      class="language-selector__field"
      @change="changeLocale()"
    >
      <option
        :value="selected"
        selected
      >
        {{ $i18n.locale }}
      </option>
      <option
        v-for="locale in availableLocales"
        :key="locale.code" >{{ locale.name }}
        <nuxt-link
          :to="switchLocalePath(locale.code)">
        </nuxt-link>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',

  data() {
    return {
      selected: ''
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },

  methods: {
    changeLocale() {
      this.$router.push(this.switchLocalePath(this.selected))
    }
  }
}
</script>
