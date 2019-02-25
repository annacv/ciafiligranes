<template>
  <div class="content">
    <Cover/>
    <Summary
      :abstract="$t('summary.abstract')"
      :items="$t('summary.items')"
    />
    <section class="main-content">
      <Synopsis
        :title="$t('synopsis.title')"
        :paragraphs="$t('synopsis.paragraphs')"
        :image="$t('synopsis.image')"
      />
    </section>
    <Highlights
      :content="$t('highlights.home')"
      :features="$t('highlights.home.features')"
    />
    <Contact :title="$t('contact.title')"/>
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
    />
  </div>
</template>

<script>
import Contact from '@/components/Contact/Contact'
import Cover from '@/components/Cover/Cover'
import Highlights from '@/components/Highlights/Highlights'
import Summary from '@/components/Summary/Summary'
import Logo from '@/components/Logo'
import Contract from '@/components/Contract/Contract'
import Synopsis from '@/components/Synopsis/Synopsis'

export default {
  name: 'HomePage',

  head() {
    return this.$t('meta.index')
  },

  components: {
    Contact,
    Contract,
    Cover,
    Highlights,
    Summary,
    Logo,
    Synopsis
  },

  nuxtI18n: {
    paths: {
      es: '/',
      ca: '/',
      en: '/'
    }
  }
}
</script>
