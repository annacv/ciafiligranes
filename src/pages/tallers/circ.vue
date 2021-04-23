<template>
  <div class="content">
    <Cover
      :content="$t('cover.circus')"
      class="cover__workshops-detail workshops__circus"
    />
    <section class="main-content">
      <DataSheet
        :titles="$t('dataSheet.workshops.titles')"
        :sheet1="$t('dataSheet.circus.sheet1')"
        :sheet2="$t('dataSheet.circus.sheet2')"
        :images="$t('gallery.circus.images')"
        :buttons="$t('dataSheet.circus.buttons')"
        class="workshops"
      />
    </section>
    <Gallery
      :images="$t('gallery.circus.images')"
    />
    <Contract
      :title="$t('contract.workshopsDetail.title')"
      :items="$t('contract.items')"
      class="contract__workshops-detail"
    />
    <Highlights
      :content="$t('highlights.circus')"
      :highlighted="$t('highlights.circus.highlighted')"
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
  name: 'Circ',

  components: {
    Contract,
    Cover,
    DataSheet,
    Gallery,
    Highlights
  },

  nuxtI18n: {
    paths: {
      es: '/talleres/circo',
      ca: '/tallers/circ',
      en: '/workshops/circus'
    }
  }
}
</script>
