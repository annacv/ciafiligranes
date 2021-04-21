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
      <DataSheet
        :titles="$t('dataSheet.titles')"
        :sheet1="$t('dataSheet.trinxeta_circus.sheet1')"
        :sheet2="$t('dataSheet.trinxeta_circus.sheet2')"
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
      es: '/espectaculos/circo-trinxeta',
      ca: '/espectacles/circ-trinxeta',
      en: '/shows/trinxeta-circus'
    }
  }
}
</script>
