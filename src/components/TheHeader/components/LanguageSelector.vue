<style
  lang="scss"
  src="../theHeader.scss"
  scoped
>
</style>

<template>
  <div class="language-selector">
    <label
      :aria-label="selectlang"
      class="language-selector__label"
      for="selectlang"
    >
    </label>
    <select
      id="selectlang"
      :aria-label="selectlang"
      :name="selectname"
      v-model="selected"
      class="language-selector__field"
      @change="changeLocale()"
    >
      <option
        :value="selected"
      >
        {{ $i18n.locale }}
      </option>
      <option
        v-for="locale in availableLocales"
        :value="locale.code"
        :key="locale.code" >{{ locale.name }}
        <nuxt-link
          :to="switchLocalePath(locale.code)"
          :aria-label="locale.iso">
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

  props: {
    selectlang: {
      type: String,
      default: ''
    },

    selectname: {
      type: String,
      default: ''
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
