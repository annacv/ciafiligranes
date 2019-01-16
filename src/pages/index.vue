<template>
  <div class="content">
    <Cover/>
    <Summary
      :abstract="$t('summary.abstract')"
      :items="$t('summary.items')"
    />
    <Highlights/>
    <Contact :title="$t('contact.title')"/>
  </div>
</template>

<script>
import Contact from '@/components/Contact/Contact'
import Cover from '@/components/Cover/Cover'
import Highlights from '@/components/Highlights/Highlights'
import Summary from '@/components/Summary/Summary'
import Logo from '@/components/Logo'

export default {
  name: 'HomePage',

  head() {
    return this.$t('meta.index')
  },

  components: {
    Logo,
    Contact,
    Cover,
    Highlights,
    Summary
  },

  nuxtI18n: {
    paths: {
      es: '/',
      ca: '/',
      en: '/'
    }
  }
}
</script>
