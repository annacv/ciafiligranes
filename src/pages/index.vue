<template>
  <div class="content">
    <Cover/>
    <InScene/>
    <Highlights/>
    <Contact :title="$t('contact.title')"/>
  </div>
</template>

<script>
import Contact from '@/components/Contact/Contact'
import Cover from '@/components/Cover/Cover'
import Highlights from '@/components/Highlights/Highlights'
import InScene from '@/components/InScene/InScene'
import Logo from '@/components/Logo'

export default {
  name: 'HomePage',

  head() {
    return this.$t('meta.index')
  },

  components: {
    Logo,
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
