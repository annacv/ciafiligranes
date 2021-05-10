<template>
  <div class="content">
    <Cover
      :content="$t('cover.freakfrac')"
      class="cover__shows-detail shows__freakfrac"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.freakfrac.abstract')"
        :items="$t('summary.freakfrac.items')"
        :button="$t('summary.freakfrac.button')"
      />
      <ProductInfo
        :sheets="$t('dataSheet.freakfrac.sheets')"
        video-id="dY4GelzNlRc"
        class="shows freakfrac"
      />
    </section>
    <Gallery
      :images="$t('gallery.freakfrac.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.freakfrac')"
      :highlighted="$t('highlights.freakfrac.highlighted')"
      :button="$t('highlights.showsDetail.button')"
      class="highlights__shows"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import Contract from '@/components/Contract/Contract'
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'
import ProductInfo from '@/components/ProductInfo/ProductInfo'
import Summary from '@/components/Summary/Summary'

export default {
  name: 'FreakFrac',

  head() {
    return Object.assign({}, this.$t('meta.shows'))
  },

  components: {
    Contract,
    Cover,
    Gallery,
    Highlights,
    ProductInfo,
    Summary
  },

  nuxtI18n: {
    paths: {
      ca: '/espectacles/freakfrac',
      es: '/espectaculos/freakfrac',
      en: '/shows/freakfrac'
    }
  }
}
</script>
