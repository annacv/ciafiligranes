<template>
  <div class="content">
    <Cover
      :content="$t('cover.trinxeta')"
      class="cover__shows-detail shows__trinxeta"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.trinxeta_circus.abstract')"
        :items="$t('summary.trinxeta_circus.items')"
      />
      <ProductInfo
        :images="$t('gallery.trinxeta_circus.images')"
        :sheets="$t('dataSheet.trinxeta_circus.sheets')"
        class="shows one_clown"
      />
    </section>
    <Gallery
      :images="$t('gallery.trinxeta_circus.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.trinxeta_circus')"
      :highlighted="$t('highlights.trinxeta_circus.highlighted')"
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
      ca: '/espectacles/circ-trinxeta',
      es: '/espectaculos/circo-trinxeta',
      en: '/shows/trinxeta-circus'
    }
  }
}
</script>
