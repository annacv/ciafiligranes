<template>
  <div class="content">
    <Cover
      :content="$t('cover.home')"
      class="cover__home"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.home.abstract')"
        :items="$t('summary.home.items')"
        :button="$t('summary.home.button')"
      />
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
    <BrandedList
      :brandedicons="$t('brandedList.brandedCorp')"
      class="branded-list-corp"
    />
  </div>
</template>

<script>
import BrandedList from '@/components/BrandedList/BrandedList'
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
    BrandedList,
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
