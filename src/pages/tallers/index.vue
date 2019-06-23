<template>
  <div class="content">
    <Cover
      :content="$t('cover.workshops')"
      class="cover__products products__workshops"
    />
    <section class="main-content">
      <ProductList
        :items="$t('productList.workshops.items')"
        class="product-list__workshops"
      />
    </section>
    <Contract
      :title="$t('contract.workshops.title')"
      :items="$t('contract.items')"
      class="contract__workshops"
    />
    <Highlights
      :content="$t('highlights.workshops')"
      :highlighted="$t('highlights.workshops.highlighted')"
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
  name: 'Workshops',

  components: {
    Contract,
    Cover,
    Highlights,
    ProductList
  },

  nuxtI18n: {
    paths: {
      es: '/talleres',
      ca: '/tallers',
      en: '/workshops'
    }
  }
}
</script>
