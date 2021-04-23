<template>
  <div class="content">
    <Cover
      :content="$t('cover.bubbles')"
      class="cover__workshops-detail workshops__bubbles"
    />
    <section class="main-content">
      <DataSheet
        :titles="$t('dataSheet.workshops.titles')"
        :sheet1="$t('dataSheet.bubbles.sheet1')"
        :sheet2="$t('dataSheet.seasonalWorkshops.sheet2')"
        :buttons="$t('dataSheet.bubbles.buttons')"
        :images="$t('gallery.bubbles.images')"
        class="workshops"
      />
    </section>
    <Gallery
      :images="$t('gallery.bubbles.images')"
    />
    <Contract
      :title="$t('contract.workshopsDetail.title')"
      :items="$t('contract.items')"
      class="contract__workshops-detail"
    />
    <Highlights
      :content="$t('highlights.bubbles')"
      :highlighted="$t('highlights.bubbles.highlighted')"
      :button="$t('highlights.workshopsDetail.button')"
      class="highlights__workshops"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import Contract from '@/components/Contract/Contract'
import DataSheet from '@/components/DataSheet/DataSheet'
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'

export default {
  name: 'BombollesSabo',

  components: {
    Contract,
    Cover,
    DataSheet,
    Gallery,
    Highlights
  },

  nuxtI18n: {
    paths: {
      es: '/talleres/burbujas-jabon',
      ca: '/tallers/bombolles-sabo',
      en: '/workshops/soap-bubles'
    }
  }
}
</script>
