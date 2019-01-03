<template>
  <div class="content">
    <Cover/>
    <InScene/>
    <Highlights/>
    <Contact/>
  </div>
</template>

<script>
import Contact from '@/components/Contact/Contact'
import Cover from '@/components/Cover/Cover'
import Highlights from '@/components/Highlights/Highlights'
import InScene from '@/components/InScene/InScene'
import BLogo from '@/components/Logo'

export default {
  name: 'HomePage',

  head() {
    return this.$t('meta.index')
  },

  components: {
    BLogo,
    Contact,
    Cover,
    Highlights,
    InScene
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
