<template>
  <div class="content">
    <Cover
      :content="$t('cover.makutu')"
      class="cover__shows-detail shows__makutu"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.makutu_circus.abstract')"
        :items="$t('summary.makutu_circus.items')"
      />
      <ProductInfo
        :images="$t('gallery.makutu_circus.images')"
        :sheets="$t('dataSheet.makutu_circus.sheets')"
        class="shows one_clown"
      />
    </section>
    <Gallery
      :images="$t('gallery.makutu_circus.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.filirates')"
      :highlighted="$t('highlights.makutu_circus.highlighted')"
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
  name: 'CircFilirates',

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
      ca: '/espectacles/circ-makutu',
      es: '/espectaculos/circo-makutu',
      en: '/shows/makutu-circus'
    }
  }
}
</script>
