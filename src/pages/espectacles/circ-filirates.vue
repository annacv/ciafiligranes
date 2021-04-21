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
      <DataSheet
        :titles="$t('dataSheet.titles')"
        :sheet1="$t('dataSheet.filirates.sheet1')"
        :sheet2="$t('dataSheet.filirates.sheet2')"
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
import DataSheet from '@/components/DataSheet/DataSheet'
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'
import Summary from '@/components/Summary/Summary'

export default {
  name: 'CircFilirates',

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
      es: '/espectaculos/circo-filiratas',
      ca: '/espectacles/circ-filirates',
      en: '/shows/filirates-circus'
    }
  }
}
</script>
