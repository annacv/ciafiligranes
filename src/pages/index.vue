<template>
  <div class="content">
    <Cover
      :content="$t('cover.home')"
    />
    <Summary
      :abstract="$t('summary.abstract')"
      :items="$t('summary.items')"
    />
    <Synopsis
      :title="$t('synopsis.title')"
      :paragraphs="$t('synopsis.paragraphs')"
      :image="$t('synopsis.image')"
      class="home"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
    />
    <Highlights
      :content="$t('highlights.home')"
      :highlighted="$t('highlights.home.highlighted')"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import Contract from '@/components/Contract/Contract'
import Highlights from '@/components/Highlights/Highlights'
import Logo from '@/components/Logo'
import Summary from '@/components/Summary/Summary'
import Synopsis from '@/components/Synopsis/Synopsis'

export default {
  name: 'HomePage',

  head() {
    return this.$t('meta.index')
  },

  components: {
    Contract,
    Cover,
    Highlights,
    Logo,
    Summary,
    Synopsis
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
