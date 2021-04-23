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
      <DataSheet
        :titles="$t('dataSheet.titles')"
        :sheet1="$t('dataSheet.makutu_circus.sheet1')"
        :sheet2="$t('dataSheet.makutu_circus.sheet2')"
        :images="$t('gallery.makutu_circus.images')"
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
      es: '/espectaculos/circo-makutu',
      ca: '/espectacles/circ-makutu',
      en: '/shows/makutu-circus'
    }
  }
}
</script>
