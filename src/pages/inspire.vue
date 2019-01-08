<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">"Just start  <b-icon
      icon="rocket"
      size="is-large" />"</h2>
    <h3 class="subtitle is-6 has-text-grey">Author: <a href="https://github.com/anteriovieira">Antério Vieira</a></h3>
  </section>
</template>
<script>
import Logo from '@/components/Logo'

export default {
  name: 'Inspire',

  head() {
    return this.$t('meta.index')
  },

  nuxtI18n: {
    paths: {
      es: '/inspire',
      ca: '/inspira',
      en: '/inspire'
    }
  }
}
</script>
