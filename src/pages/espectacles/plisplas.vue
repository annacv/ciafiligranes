<template>
  <div class="content">
    <Cover
      :content="$t('cover.plisplas')"
      class="cover__products-detail shows__plisplas"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.plisplas.abstract')"
        :items="$t('summary.plisplas.items')"
        :button="$t('summary.plisplas.button')"
      />
      <DataSheet
        :titles="$t('dataSheet.performances.titles')"
        :sheet1="$t('dataSheet.performances.sheet1')"
        :sheet2="$t('dataSheet.performances.sheet2')"
        class="performances"
      />
    </section>
    <Gallery
      :images="$t('gallery.performances.images')"
    />
    <Contract
      :title="$t('contract.shows.title')"
      :items="$t('contract.items')"
      class="contract__shows"
    />
    <Highlights
      :content="$t('highlights.shows')"
      :highlighted="$t('highlights.shows.highlighted')"
      class="highlights__mixed"
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
