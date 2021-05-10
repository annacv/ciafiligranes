<template>
  <div class="content">
    <Cover
      :content="$t('cover.desencaixats')"
      class="cover__shows-detail shows__desencaixats"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.desencaixats.abstract')"
        :items="$t('summary.desencaixats.items')"
        :button="$t('summary.desencaixats.button')"
      />
      <ProductInfo
        :sheets="$t('dataSheet.desencaixats.sheets')"
        video-id="GQ67p38vqcY"
        class="shows desencaixats"
      />
    </section>
    <Gallery
      :images="$t('gallery.desencaixats.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.desencaixats')"
      :highlighted="$t('highlights.desencaixats.highlighted')"
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
  name: 'Desencaixats',

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
      ca: '/espectacles/desencaixats',
      es: '/espectaculos/desencaixats',
      en: '/shows/desencaixats'
    }
  }
}
</script>
