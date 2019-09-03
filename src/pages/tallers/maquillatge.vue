<template>
  <div class="content">
    <Cover
      :content="$t('cover.makeup')"
      class="cover__workshops-detail workshops__makeup"
    />
    <section class="main-content">
      <DataSheet
        :titles="$t('dataSheet.workshops.titles')"
        :sheet1="$t('dataSheet.makeup.sheet1')"
        :sheet2="$t('dataSheet.makeup.sheet2')"
        :buttons="$t('dataSheet.makeup.buttons')"
        class="workshops"
      />
    </section>
    <Gallery
      :images="$t('gallery.makeup.images')"
    />
    <Contract
      :title="$t('contract.workshopsDetail.title')"
      :items="$t('contract.items')"
      class="contract__workshops-detail"
    />
    <Highlights
      :content="$t('highlights.makeup')"
      :highlighted="$t('highlights.makeup.highlighted')"
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
  name: 'Maquillatge',

  components: {
    Contract,
    Cover,
    DataSheet,
    Gallery,
    Highlights
  },

  nuxtI18n: {
    paths: {
      es: '/talleres/maquillaje',
      ca: '/tallers/maquillatge',
      en: '/workshops/makeup'
    }
  }
}
</script>
