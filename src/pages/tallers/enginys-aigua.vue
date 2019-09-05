<template>
  <div class="content">
    <Cover
      :content="$t('cover.water')"
      class="cover__workshops-detail workshops__water"
    />
    <section class="main-content">
      <DataSheet
        :titles="$t('dataSheet.workshops.titles')"
        :sheet1="$t('dataSheet.water.sheet1')"
        :sheet2="$t('dataSheet.seasonalWorkshops.sheet2')"
        :buttons="$t('dataSheet.water.buttons')"
        class="workshops"
      />
    </section>
    <Gallery
      :images="$t('gallery.water.images')"
    />
    <Contract
      :title="$t('contract.workshopsDetail.title')"
      :items="$t('contract.items')"
      class="contract__workshops-detail"
    />
    <Highlights
      :content="$t('highlights.water')"
      :highlighted="$t('highlights.water.highlighted')"
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
  name: 'EnginysAigua',

  components: {
    Contract,
    Cover,
    DataSheet,
    Gallery,
    Highlights
  },

  nuxtI18n: {
    paths: {
      es: '/talleres/ingenios-agua',
      ca: '/tallers/enginys-aigua',
      en: '/workshops/water-tricks'
    }
  }
}
</script>
