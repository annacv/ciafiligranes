<template>
  <div class="content">
    <Cover
      :content="$t('cover.home')"
      class="cover__home"
    />
    <Summary
      :abstract="$t('summary.abstract')"
      :items="$t('summary.items')"
      :button="$t('summary.button')"
    />
    <section class="main-content">
      <Synopsis
        :title="$t('synopsis.home.title')"
        :image="$t('synopsis.home.image')"
        :paragraphs="$t('synopsis.home.paragraphs')"
        class="synopsis__home"
      />
      <Contract
        :title="$t('contract.title')"
        :items="$t('contract.items')"
        class="contract__home"
      />
    </section>
    <Highlights
      :content="$t('highlights.home')"
      :highlighted="$t('highlights.home.highlighted')"
      class="highlights__mixed"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import Contract from '@/components/Contract/Contract'
import Highlights from '@/components/Highlights/Highlights'
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
