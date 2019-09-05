<template>
  <div class="content">
    <Cover
      :content="$t('cover.clowns')"
      class="cover__workshops-detail workshops__clowns"
    />
    <section class="main-content">
      <DataSheet
        :titles="$t('dataSheet.workshops.titles')"
        :sheet1="$t('dataSheet.clowns.sheet1')"
        :sheet2="$t('dataSheet.clowns.sheet2')"
        :buttons="$t('dataSheet.clowns.buttons')"
        class="workshops"
      />
    </section>
    <Gallery
      :images="$t('gallery.clowns.images')"
    />
    <Contract
      :title="$t('contract.workshopsDetail.title')"
      :items="$t('contract.items')"
      class="contract__workshops-detail"
    />
    <Highlights
      :content="$t('highlights.clowns')"
      :highlighted="$t('highlights.clowns.highlighted')"
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
  name: 'Pallassos',

  components: {
    Contract,
    Cover,
    DataSheet,
    Gallery,
    Highlights
  },

  nuxtI18n: {
    paths: {
      es: '/talleres/payasos',
      ca: '/tallers/pallassos',
      en: '/workshops/clowns'
    }
  }
}
</script>
