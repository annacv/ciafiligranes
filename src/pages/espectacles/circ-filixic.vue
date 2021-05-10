<template>
  <div class="content">
    <Cover
      :content="$t('cover.filixic')"
      class="cover__shows-detail shows__filixic"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.filixic.abstract')"
        :items="$t('summary.filixic.items')"
        :button="$t('summary.filixic.button')"
      />
      <ProductInfo
        :sheets="$t('dataSheet.filixic.sheets')"
        video-id="rg3XzGQIPpU"
        class="shows filixic"
      />
    </section>
    <Gallery
      :images="$t('gallery.filixic.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.filixic')"
      :highlighted="$t('highlights.filixic.highlighted')"
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
  name: 'CircFilixic',

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
      ca: '/espectacles/circ-filixic',
      es: '/espectaculos/circo-filixic',
      en: '/shows/filixic-circus'
    }
  }
}
</script>
