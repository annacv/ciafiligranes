<template>
  <div class="content">
    <Cover
      :content="$t('cover.circus')"
      class="cover__workshops-detail workshops__circus"
    />
    <section class="main-content">
      <DataSheet
        :titles="$t('dataSheet.plisplas.titles')"
        :sheet1="$t('dataSheet.plisplas.sheet1')"
        :sheet2="$t('dataSheet.plisplas.sheet2')"
        :buttons="$t('dataSheet.plisplas.buttons')"
        class="shows"
      />
    </section>
    <Gallery
      :images="$t('gallery.circus.images')"
    />
    <Contract
      :title="$t('contract.workshops_detail.title')"
      :items="$t('contract.items')"
      class="contract__workshops-detail"
    />
    <Highlights
      :content="$t('highlights.circus')"
      :highlighted="$t('highlights.circus.highlighted')"
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
import Summary from '@/components/Summary/Summary'

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
