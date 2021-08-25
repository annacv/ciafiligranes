<template>
  <div class="content">
    <Cover
      :content="$t('cover.bubbles')"
      class="cover__workshops-detail workshops__bubbles"
    />
    <section class="main-content">
      <ProductInfo
        :buttons="$t('dataSheet.bubbles.buttons')"
        :images="$t('gallery.bubbles.images')"
        :sheets="$t('dataSheet.bubbles.sheets')"
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
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'
import ProductInfo from '@/components/ProductInfo/ProductInfo'

export default {
  name: 'BombollesSabo',

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
      ca: '/tallers/bombolles-sabo',
      es: '/talleres/burbujas-jabon',
      en: '/workshops/soap-bubbles'
    }
  }
}
</script>
