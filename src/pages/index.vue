<template>
  <div class="content">
    <Cover/>
    <section class="main-content">
      <Synopsis
        :title="$t('synopsis.title')"
        :paragraphs="$t('synopsis.paragraphs')"
        :image="$t('synopsis.image')"
      />
      <InScene/>
    </section>
    <Highlights/>
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
import InScene from '@/components/InScene/InScene'
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
    InScene,
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
