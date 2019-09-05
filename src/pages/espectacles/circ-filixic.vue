<template>
  <div class="content">
    <Cover
      :content="$t('cover.filixic')"
      class="cover__shows-detail shows__filixic"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.filixic.abstract')"
        :items="$t('summary.filixic.items')"
        :button="$t('summary.filixic.button')"
      />
      <DataSheet
        :titles="$t('dataSheet.titles')"
        :sheet1="$t('dataSheet.filixic.sheet1')"
        :sheet2="$t('dataSheet.filixic.sheet2')"
        :buttons="$t('dataSheet.plisplas.buttons')"
        class="shows filixic"
      />
    </section>
    <Gallery
      :images="$t('gallery.filixic.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.filixic')"
      :highlighted="$t('highlights.filixic.highlighted')"
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
  name: 'CircFilixic',

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
      es: '/espectaculos/circo-filixic',
      ca: '/espectacles/circ-filixic',
      en: '/shows/filixic-circus'
    }
  }
}
</script>
