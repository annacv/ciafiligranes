<template>
  <div class="content">
    <Cover
      :content="$t('cover.circus')"
      class="cover__workshops-detail workshops__circus"
    />
    <section class="main-content">
      <ProductInfo
        :buttons="$t('dataSheet.circus.buttons')"
        :images="$t('gallery.circus.images')"
        :sheets="$t('dataSheet.circus.sheets')"
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
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'
import ProductInfo from '@/components/ProductInfo/ProductInfo'

export default {
  name: 'Circ',

  components: {
    Contract,
    Cover,
    Gallery,
    Highlights,
    ProductInfo
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
