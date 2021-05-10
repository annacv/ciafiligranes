<template>
  <div class="content">
    <Cover
      :content="$t('cover.makeup')"
      class="cover__workshops-detail workshops__makeup"
    />
    <section class="main-content">
      <ProductInfo
        :buttons="$t('dataSheet.makeup.buttons')"
        :images="$t('gallery.makeup.images')"
        :sheets="$t('dataSheet.makeup.sheets')"
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
  name: 'Maquillatge',

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
      ca: '/tallers/maquillatge',
      es: '/talleres/maquillaje',
      en: '/workshops/makeup'
    }
  }
}
</script>
