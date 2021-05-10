<template>
  <div class="content">
    <Cover
      :content="$t('cover.water')"
      class="cover__workshops-detail workshops__water"
    />
    <section class="main-content">
      <ProductInfo
        :buttons="$t('dataSheet.water.buttons')"
        :images="$t('gallery.water.images')"
        :sheets="$t('dataSheet.water.sheets')"
        class="workshops"
      />
      <!-- <DataSheet
        :titles="$t('dataSheet.workshops.titles')"
        :sheet1="$t('dataSheet.water.sheet1')"
        :sheet2="$t('dataSheet.seasonalWorkshops.sheet2')"
        :images="$t('gallery.water.images')"
        :buttons="$t('dataSheet.water.buttons')"
        class="workshops"
      /> -->
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
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'
import ProductInfo from '@/components/ProductInfo/ProductInfo'

export default {
  name: 'EnginysAigua',

  head() {
    return Object.assign({}, this.$t('meta.workshops'))
  },

  components: {
    Contract,
    Cover,
    Gallery,
    Highlights,
    ProductInfo
  },

  nuxtI18n: {
    paths: {
      ca: '/tallers/enginys-aigua',
      es: '/talleres/ingenios-agua',
      en: '/workshops/water-tricks'
    }
  }
}
</script>
