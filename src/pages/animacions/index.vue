<template>
  <div class="content">
    <Cover
      :content="$t('cover.performances')"
      class="cover__products products__performances"
    />
    <section class="main-content performances">
      <Summary
        :abstract="$t('summary.performances.abstract')"
        :items="$t('summary.performances.items')"
        :button="$t('summary.performances.button')"
      />
      <Synopsis
        :title="$t('synopsis.performances.title')"
        :image="$t('synopsis.performances.image')"
        :paragraphs="$t('synopsis.performances.paragraphs')"
        class="synopsis__performances"
      />
      <Contract
        :title="$t('contract.performances.title')"
        :items="$t('contract.items')"
        class="contract__performances-w"
      />
    </section>
    <ProductInfo
      :images="$t('gallery.performances.images')"
      :sheets="$t('dataSheet.performances.sheets')"
      class="performances"
    />
    <Gallery
      :images="$t('gallery.performances.images')"
    />
    <Contract
      :title="$t('contract.performances.title')"
      :items="$t('contract.items')"
      class="contract__performances"
    />
    <Highlights
      :content="$t('highlights.performances')"
      :highlighted="$t('highlights.performances.highlighted')"
      class="highlights__mixed"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import Contract from '@/components/Contract/Contract'
import Gallery from '@/components/Gallery/Gallery'
import Highlights from '@/components/Highlights/Highlights'
import ProductInfo from '@/components/ProductInfo/ProductInfo'
import Synopsis from '@/components/Synopsis/Synopsis'
import Summary from '@/components/Summary/Summary'

export default {
  name: 'Performances',

  components: {
    Contract,
    Cover,
    Gallery,
    Highlights,
    ProductInfo,
    Synopsis,
    Summary
  },

  nuxtI18n: {
    paths: {
      ca: '/animacions',
      es: '/animaciones',
      en: '/performances'
    }
  }
}
</script>
