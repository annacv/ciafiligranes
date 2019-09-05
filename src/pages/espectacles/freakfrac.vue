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
      <DataSheet
        :titles="$t('dataSheet.titles')"
        :sheet1="$t('dataSheet.freakfrac.sheet1')"
        :sheet2="$t('dataSheet.freakfrac.sheet2')"
        :buttons="$t('dataSheet.plisplas.buttons')"
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
import DataSheet from '@/components/DataSheet/DataSheet'
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'
import Summary from '@/components/Summary/Summary'

export default {
  name: 'FreakFrac',

  components: {
    Contract,
    Cover,
    DataSheet,
    Gallery,
    Highlights,
    Summary
  },

  nuxtI18n: {
    paths: {
      es: '/espectaculos/freakfrac',
      ca: '/espectacles/freakfrac',
      en: '/shows/freakfrac'
    }
  }
}
</script>
