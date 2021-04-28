<template>
  <div class="content">
    <Cover
      :content="$t('cover.filirates')"
      class="cover__shows-detail shows__filirates"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.filirates.abstract')"
        :items="$t('summary.filirates.items')"
        :button="$t('summary.filirates.button')"
      />
      <ProductInfo
        :sheets="$t('dataSheet.filirates.sheets')"
        video-id="lU5b5V7U6Wc"
        class="shows filirates"
      />
    </section>
    <Gallery
      :images="$t('gallery.filirates.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.filirates')"
      :highlighted="$t('highlights.filirates.highlighted')"
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
      es: '/espectaculos/circo-filiratas',
      ca: '/espectacles/circ-filirates',
      en: '/shows/filirates-circus'
    }
  }
}
</script>
