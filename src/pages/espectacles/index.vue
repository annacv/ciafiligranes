<template>
  <div class="content">
    <Cover
      :content="$t('cover.shows')"
      class="cover__products products__shows"
    />
    <section class="main-content">
      <ProductList
        :items="$t('productList.shows.items')"
        class="product-list__shows"
      />
    </section>
    <Contract
      :title="$t('contract.shows.title')"
      :items="$t('contract.items')"
      class="contract__shows"
    />
    <Highlights
      :content="$t('highlights.shows')"
      :highlighted="$t('highlights.shows.highlighted')"
      class="highlights__mixed"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import Contract from '@/components/Contract/Contract'
import Highlights from '@/components/Highlights/Highlights'
import ProductList from '@/components/ProductList/ProductList'

export default {
  name: 'Shows',

  components: {
    Contract,
    Cover,
    Highlights,
    ProductList
  },

  nuxtI18n: {
    paths: {
      es: '/espectaculos',
      ca: '/espectacles',
      en: '/shows'
    }
  }
}
</script>
