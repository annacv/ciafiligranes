<template>
  <div class="content">
    <Cover
      :content="$t('cover.plisplas')"
      class="cover__shows-detail shows__plisplas"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.plisplas.abstract')"
        :items="$t('summary.plisplas.items')"
        :button="$t('summary.plisplas.button')"
      />
      <DataSheet
        :titles="$t('dataSheet.titles')"
        :sheet1="$t('dataSheet.plisplas.sheet1')"
        :sheet2="$t('dataSheet.plisplas.sheet2')"
        video-id="VOcQTqZ9C2A"
        class="shows plisplas"
      />
    </section>
    <Gallery
      :images="$t('gallery.plisplas.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.plisplas')"
      :highlighted="$t('highlights.plisplas.highlighted')"
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
  name: 'PlisPlas',

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
      es: '/espectaculos/plisplas',
      ca: '/espectacles/plisplas',
      en: '/shows/plisplas'
    }
  }
}
</script>
