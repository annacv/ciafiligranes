<template>
  <div class="content">
    <Cover
      :content="$t('cover.desencaixats')"
      class="cover__products-detail shows__desencaixats"
    />
    <section class="main-content">
      <Summary
        :abstract="$t('summary.desencaixats.abstract')"
        :items="$t('summary.desencaixats.items')"
        :button="$t('summary.desencaixats.button')"
      />
      <DataSheet
        :titles="$t('dataSheet.desencaixats.titles')"
        :sheet1="$t('dataSheet.desencaixats.sheet1')"
        :sheet2="$t('dataSheet.desencaixats.sheet2')"
        class="shows"
      />
    </section>
    <Gallery
      :images="$t('gallery.desencaixats.images')"
    />
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
      class="contract__shows-detail"
    />
    <Highlights
      :content="$t('highlights.desencaixats')"
      :highlighted="$t('highlights.desencaixats.highlighted')"
      class="highlights__shows"
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
  name: 'Desencaixats',

  components: {
    Contract,
    Cover,
    DataSheet,
    Gallery,
    Highlights,
    Summary
  },

  nuxtI18n: {
    paths: {
      es: '/espectaculos/desencaixats',
      ca: '/espectacles/desencaixats',
      en: '/shows/desencaixats'
    }
  }
}
</script>
