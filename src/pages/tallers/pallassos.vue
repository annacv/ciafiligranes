<template>
  <div class="content">
    <Cover
      :content="$t('cover.clowns')"
      class="cover__workshops-detail workshops__clowns"
    />
    <section class="main-content">
      <ProductInfo
        :buttons="$t('dataSheet.clowns.buttons')"
        :images="$t('gallery.clowns.images')"
        :sheets="$t('dataSheet.clowns.sheets')"
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
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'
import ProductInfo from '@/components/ProductInfo/ProductInfo'

export default {
  name: 'Pallassos',

  components: {
    Contract,
    Cover,
    Gallery,
    Highlights,
    ProductInfo
  },

  nuxtI18n: {
    paths: {
      ca: '/tallers/pallassos',
      es: '/talleres/payasos',
      en: '/workshops/clowns'
    }
  }
}
</script>
